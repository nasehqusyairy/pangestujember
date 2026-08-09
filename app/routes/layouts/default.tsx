import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Navbar } from "~/components/navbar";
import { PageFooter } from "~/components/page-footer";
import { CartDrawer } from "~/components/cart-drawer";
import { CartProvider } from "~/components/context/cart-context";
import { Button, buttonVariants } from "~/components/ui/button";
import { ChevronUp, ShoppingCart } from "lucide-react";

export default function DefaultLayout() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <CartProvider>
            <div className="relative">
                <Navbar />
                <Outlet />
                <CartDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
                <PageFooter />
                <div className="fixed grid gap-4 right-0 bottom-0 p-4">
                    <Link to='#' className={buttonVariants({ size: 'icon', variant: 'outline' })}><ChevronUp /></Link>
                    <Button size={'icon'} variant={'secondary'} onClick={() => setDrawerOpen(true)}><ShoppingCart /></Button>
                </div>
            </div>
        </CartProvider>
    )
}