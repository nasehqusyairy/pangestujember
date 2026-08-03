import logo from "~/images/logo.png"
import { Button, buttonVariants } from "./ui/button";
import { Link } from "react-router";
import { Menu, ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function Navbar() {
    return (
        <div className="relative h-16">
            <div className="fixed top-0 w-full bg-white shadow z-40">
                <div className="container mx-auto flex justify-between py-2 items-center">
                    <div className="brand flex gap-2 items-center font-heading text-2xl text-primary">
                        <img src={logo} alt="Logo" className="size-14" />
                        <span>Pangestu</span>
                    </div>
                    <div className="navigations hidden lg:flex gap-4 font-heading uppercase items-center">
                        <Link className="pb-2 border-b border-primary font-bold text-primary" to={'#'}>Beranda</Link>
                        <Link to={'#'}>Tentang</Link>
                        <Link to={'#'}>Menu</Link>
                        <Link to={'#'}>Outlet</Link>
                        <Link to={'#'}>Testimoni</Link>
                        <Link to={'#'}>Karir</Link>
                    </div>
                    <div className="action flex gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger className={buttonVariants({
                                size: "icon",
                                className: 'lg:hidden',
                                variant: 'outline'
                            })}>
                                <Menu />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem className={"bg-primary text-primary-foreground"}>
                                    Beranda
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Tentang
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Menu
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Outlet
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Testimoni
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Karir
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size={'icon'} className={"lg:hidden"}>
                            <ShoppingCart />
                        </Button>
                        <Button size={'lg'} className={'hidden lg:block'}>Pesan Sekarang</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}