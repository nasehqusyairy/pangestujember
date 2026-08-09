import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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

const CART_STORAGE_KEY = "pangestujember_cart";
const WHATSAPP_NUMBER = "6282330741775";

export type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position: "bottom" | "right";
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

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
  const nextCart = cart.filter((entry) => entry.id !== item.id);

  if (quantity > 0) {
    nextCart.push({ ...item, quantity });
  }

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
    >
      <DrawerContent className={'rounded-none!'}>
        <DrawerHeader className="flex flex-row items-center justify-between">
          <DrawerTitle>Keranjang</DrawerTitle>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X />
          </Button>
        </DrawerHeader>

        {items.length === 0 ? (
          <DrawerDescription className="p-6 text-center">
            Keranjang kamu masih kosong.
          </DrawerDescription>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
            {items.map((item) => (
              <Item key={item.id} variant={'outline'} className="flex items-center gap-4 rounded-xl p-3">
                <ItemMedia className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                </ItemMedia>

                <ItemContent className="flex-1 min-w-0 flex flex-col gap-1">
                  <ItemTitle className="truncate font-semibold">{item.title}</ItemTitle>
                  <ItemDescription className="text-xs text-muted-foreground">
                    {toRupiah(item.price)} / item
                  </ItemDescription>
                  <ItemTitle className="text-sm font-semibold text-primary">
                    {toRupiah(item.price * item.quantity)}
                  </ItemTitle>
                </ItemContent>

                <ItemActions className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center font-medium">{item.quantity}</span>
                  <Button
                    variant="default"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                  >
                    +
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </div>
        )}

        <DrawerFooter className="border-t p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Total Pesanan</span>
            <span>{toRupiah(totalPrice)}</span>
          </div>

          {items.length > 0 ? (
            <a className={buttonVariants({ size: "lg", className: "w-full justify-center" })} href={whatsappHref} target="_blank" rel="noreferrer">
              Pesan via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <Button size="lg" className="w-full" disabled>
              Pesan via WhatsApp
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}