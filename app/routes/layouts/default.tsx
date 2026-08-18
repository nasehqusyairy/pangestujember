import { Outlet } from "react-router";
import { Navbar } from "~/components/navbar";
import { PageFooter } from "~/components/page-footer";
import { CartDrawer } from "~/components/cart-drawer";
import { CartProvider } from "~/components/context/cart-context";
import { Button, buttonVariants } from "~/components/ui/button";
import { ChevronUp } from "lucide-react";
import { PageProgressBar } from "~/components/page-progressbar";
import { FloatingCartButton } from "~/components/floating-cart-button";

const scrollToTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

export default function DefaultLayout() {
    return (
        <CartProvider>
            <PageProgressBar />
            <div className="relative">
                <Navbar />
                <Outlet />
                <CartDrawer />
                <PageFooter />
                <div className="fixed grid gap-4 right-0 bottom-0 p-4">
                    <Button className={buttonVariants({ size: 'icon', variant: 'secondary' })} onClick={scrollToTop}><ChevronUp /></Button>
                    <FloatingCartButton />
                </div>
            </div>
        </CartProvider>
    )
}