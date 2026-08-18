import { Button } from "~/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "~/components/context/cart-context";

export function FloatingCartButton() {
    const { items, setDrawerOpen } = useCart();

    // Hitung total item di keranjang
    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="relative inline-flex">
            <Button
                size={'icon'}
                variant={'default'}
                onClick={() => setDrawerOpen(true)}
            >
                <ShoppingCart />
            </Button>

            {/* Badge Merah */}
            {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-destructive px-1 text-white animate-in zoom-in ring-white ring-1 text-xs">
                    {totalCount > 99 ? '99+' : totalCount}
                </span>
            )}
        </div>
    );
}