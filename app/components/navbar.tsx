import logo from "~/images/logo.png"
import { Button, buttonVariants } from "./ui/button";
import { Link, NavLink } from "react-router";
import { Menu, ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { navlinks } from "~/lib/data";

export function Navbar() {
    return (
        <div className="relative h-16">
            <div className="fixed top-0 w-full bg-white shadow z-40">
                <div className="container mx-auto flex justify-between py-2 items-center">
                    <Link to={'/'} className="brand flex gap-2 items-center font-heading text-2xl text-primary">
                        <img src={logo} alt="Logo" className="size-14" />
                        <span>Pangestu</span>
                    </Link>
                    <div className="nav-lg hidden lg:flex gap-4 font-heading uppercase items-center">
                        {navlinks.map(el => (
                            <NavLink key={`nav-lg-${el.label}`} to={el.href}>{el.label}</NavLink>
                        ))}
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={buttonVariants({
                            size: "icon",
                            className: 'lg:hidden',
                            variant: 'outline'
                        })}>
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={'nav-sm'}>
                            {navlinks.map(el => (
                                <DropdownMenuItem key={`nav-sm-${el.label}`} render={<NavLink to={el.href}>{el.label}</NavLink>} />
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}