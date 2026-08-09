import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { toRupiah } from "~/lib/utils";

const CART_STORAGE_KEY = 'pangestujember_cart';

type CartItem = {
    id: number
    title: string
    price: number
    img: string
    quantity: number
}

export type MenuItemCardProps = {
    id: number
    img: string
    title: string
    price: number
    description: string
}

function getSavedCart(): CartItem[] {
    if (typeof window === 'undefined') return [];

    try {
        const raw = window.localStorage.getItem(CART_STORAGE_KEY);
        if (!raw) return [];
        return JSON.parse(raw) as CartItem[];
    } catch {
        return [];
    }
}

function saveCart(items: CartItem[]) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

function updateCartItem(item: Omit<CartItem, 'quantity'>, quantity: number) {
    const cart = getSavedCart();
    const nextCart = cart.filter((entry) => entry.id !== item.id);

    if (quantity > 0) {
        nextCart.push({ ...item, quantity });
    }

    saveCart(nextCart);
}

export function MenuItemCard(props: MenuItemCardProps) {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const cart = getSavedCart();
        const existing = cart.find((item) => item.id === props.id);
        setQuantity(existing?.quantity ?? 0);
    }, [props.id]);

    const handleAdd = () => {
        const nextQuantity = quantity + 1;
        updateCartItem(
            { id: props.id, title: props.title, price: props.price, img: props.img },
            nextQuantity,
        );
        setQuantity(nextQuantity);
    };

    const handleRemove = () => {
        const nextQuantity = quantity - 1;
        updateCartItem(
            { id: props.id, title: props.title, price: props.price, img: props.img },
            nextQuantity,
        );
        setQuantity(nextQuantity > 0 ? nextQuantity : 0);
    };

    return (
        <Card className="relative pt-0 bg-white h-full justify-between">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={props.img}
                alt={`${props.title} Image`}
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>
                    {toRupiah(props.price)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {props.description}
            </CardContent>
            <CardFooter className="border-t-0 bg-white">
                {quantity > 0 ? (
                    <div className="flex items-center gap-2 w-full p-2 bg-card rounded">
                        <Button variant={'secondary'} size={'icon'} onClick={handleRemove}>
                            <Minus />
                        </Button>
                        <div className="flex-1 text-center text-sm font-semibold">
                            {quantity}
                        </div>
                        <Button variant={'secondary'} size={'icon'} onClick={handleAdd}>
                            <Plus />
                        </Button>
                    </div>
                ) : (
                    <Button className="w-full" variant={'default'} size={'lg'} onClick={handleAdd}>
                        Pesan
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}