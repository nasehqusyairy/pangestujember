import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ZoomableImage } from "./image-zoom";
import { toRupiah } from "~/lib/utils";
import { useCart } from "~/components/context/cart-context";

export type MenuItemCardProps = {
    id: number
    img: string
    title: string
    price: number
    description: string
}

export function MenuItemCard(props: MenuItemCardProps) {
    const { getQuantity, addItem, removeItem } = useCart();
    const quantity = getQuantity(props.id);

    const handleAdd = () => {
        addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            img: props.img,
            description: props.description,
        });
    };

    const handleRemove = () => {
        removeItem({
            id: props.id,
            title: props.title,
            price: props.price,
            img: props.img,
            description: props.description,
        });
    };

    return (
        <Card className="pt-0 bg-white h-full justify-between">
            <ZoomableImage
                src={props.img}
                alt={`${props.title} Image`}
                className="aspect-video w-full"
                loading="lazy"
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