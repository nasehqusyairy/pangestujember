import { Minus, Phone, Plus, X } from "lucide-react";
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
import { WHATSAPP_NUMBER } from "~/lib/data";
import { useCart, type CartItem } from "~/components/context/cart-context";

export type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, totalPrice, setItemQuantity } = useCart();

  const handleQuantityChange = (item: CartItem, nextQuantity: number) => {
    setItemQuantity(item, nextQuantity);
  };

  const whatsappMessage = items.length === 0
    ? "Halo, saya ingin memesan."
    : encodeURIComponent(
      `Halo, saya ingin memesan:\n${items
        .map((item) => `- ${item.title} x ${item.quantity}`)
        .join("\n")}\nTotal: ${toRupiah(totalPrice)}`
    );

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      modal={false}
      swipeDirection={"down"}
      showSwipeHandle
      disablePointerDismissal
    >
      <DrawerContent className={`bg-white! border lg:w-3/12 ms-auto lg:me-8 shadow`}>
        <DrawerHeader className="flex-row justify-between items-center pb-4 border-b">
          <DrawerTitle className={'text-primary font-bold'}>Keranjang</DrawerTitle>
          <Button variant={'ghost'} size={'icon'} onClick={() => onOpenChange(false)}>
            <X />
          </Button>
        </DrawerHeader>
        {items.length === 0 ? (
          <DrawerDescription className="p-4 text-center">
            Keranjang kamu masih kosong.
          </DrawerDescription>
        ) : (
          <div className={`flex-1 overflow-y-auto p-4 flex flex-col gap-2 max-h-60`}>
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}