import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { toRupiah } from "~/lib/utils";

export type MenuItemCardProps = {
    img: string
    title: string
    price: number
    description: string
}

export function MenuItemCard(props: MenuItemCardProps) {
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
                <Button className="w-full" variant={'default'} size={'lg'}>Beli</Button>
            </CardFooter>
        </Card>
    )
}