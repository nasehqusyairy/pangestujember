import { useEffect, useState } from "react";
import { Minus, Phone, Plus, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
} from "./ui/drawer";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item";
import { toRupiah } from "~/lib/utils";
import { CART_STORAGE_KEY, WHATSAPP_NUMBER, type MenuItem } from "~/lib/data";

export type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position: "bottom" | "right";
};

type CartItem = MenuItem & { quantity: number }

function getSavedCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

function updateCartItem(item: CartItem, quantity: number) {
  const cart = getSavedCart();

  if (quantity <= 0) {
    const nextCart = cart.filter((entry) => entry.id !== item.id);
    saveCart(nextCart);
    return nextCart;
  }

  const exists = cart.some((entry) => entry.id === item.id);

  const nextCart = exists
    ? cart.map((entry) =>
      entry.id === item.id ? { ...entry, quantity } : entry
    )
    : [...cart, { ...item, quantity }];

  saveCart(nextCart);
  return nextCart;
}

export function CartDrawer({ open, onOpenChange, position }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (open) {
      setItems(getSavedCart());
    }
  }, [open]);

  const handleQuantityChange = (item: CartItem, nextQuantity: number) => {
    const nextCart = updateCartItem(item, nextQuantity);
    setItems(nextCart);
  };

  // Perhitungan total harga langsung tanpa useMemo
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Perhitungan pesan WhatsApp langsung tanpa useMemo
  const whatsappMessage = items.length === 0
    ? "Halo, saya ingin memesan."
    : encodeURIComponent(
      `Halo, saya ingin memesan:\n${items
        .map((item) => `- ${item.title} x ${item.quantity}`)
        .join("\n")}\nTotal: ${toRupiah(totalPrice)}`
    );

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const swipeDirection = position === "bottom" ? "down" : "right";

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      modal={false}
      swipeDirection={swipeDirection}
      showSwipeHandle={swipeDirection === 'down'}
      disablePointerDismissal
    >
      <DrawerContent className={`rounded-none! bg-white!`}>
        {items.length === 0 ? (
          <DrawerDescription className="p-4 text-center">
            Keranjang kamu masih kosong.
          </DrawerDescription>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
            {items.map((item) => (
              <Item key={item.id} className="p-0 border-b-input! rounded-none pb-2">
                <ItemMedia className="size-12 rounded">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover rounded" />
                </ItemMedia>

                <ItemContent className="flex-1 gap-1">
                  <ItemTitle className="truncate font-semibold">{item.title}</ItemTitle>
                  <ItemDescription className="text-xs text-muted-foreground">
                    {toRupiah(item.price)} / item
                  </ItemDescription>
                  <ItemTitle className="text-sm text-primary">
                    {toRupiah(item.price * item.quantity)}
                  </ItemTitle>
                </ItemContent>

                <ItemActions className="bg-card p-1 rounded">
                  <Button
                    variant="secondary"
                    size="icon"
                    className={'size-6'}
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                  >
                    <Minus />
                  </Button>
                  <span className="w-6 text-center font-medium">{item.quantity}</span>
                  <Button
                    variant="secondary"
                    size="icon"
                    className={'size-6'}
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                  >
                    <Plus />
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </div>
        )}

        <DrawerFooter className="border-t p-4">
          <div className="flex items-center justify-between">
            <span className="font-bold">Total Pesanan</span>
            <span>{toRupiah(totalPrice)}</span>
          </div>

          {items.length > 0 ? (
            <a className={buttonVariants({ className: "w-full" })} href={whatsappHref} target="_blank" rel="noreferrer">
              <Phone /> Pesan via WhatsApp
            </a>
          ) : (
            <Button className="w-full" disabled>
              <Phone /> Pesan via WhatsApp
            </Button>
          )}
          <Button className="w-full" variant={'secondary'} onClick={() => onOpenChange(false)}>
            <X /> Tutup
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}