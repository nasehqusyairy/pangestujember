import { useState } from "react";
import { Outlet } from "react-router";
import { Navbar } from "~/components/navbar";
import { PageFooter } from "~/components/page-footer";
import { CartDrawer } from "~/components/cart-drawer";
import { CartProvider } from "~/components/context/cart-context";

export default function DefaultLayout() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerPosition, setDrawerPosition] = useState<'bottom' | 'right'>('right');

    const handleOpenCart = (position: 'bottom' | 'right') => {
        setDrawerPosition(position);
        setDrawerOpen(true);
    };

    return (
        <CartProvider>
            <Navbar onOpenCart={handleOpenCart} />
            <Outlet />
            <CartDrawer open={drawerOpen} onOpenChange={setDrawerOpen} position={drawerPosition} />
            <PageFooter />
        </CartProvider>
    )
}