import { Jumbotron } from "~/components/jumbotron";
import { CategoryTab } from "~/components/sections/menu/category-tab";
import type { Category, MenuItem } from "../lib/data";
import { fetchSheet } from "~/.server/utils";

export const loader = async () => {

    const [menuItems, categories] = await Promise.all([
        fetchSheet<MenuItem>('menus'),
        fetchSheet<Category>('categories')
    ])

    return { menuItems, categories }
}

loader.hydrate = true as const

export function HydrateFallback() {
    return <p>Loading Game...</p>;
}

export default function Menu(props: {
    loaderData: Awaited<ReturnType<typeof loader>>
}) {
    return (
        <>
            <Jumbotron title="Menu" />
            <section className="py-8">
                <div className="container mx-auto">
                    <CategoryTab {...{ ...props.loaderData }} />
                </div>
            </section>
        </>
    )
}