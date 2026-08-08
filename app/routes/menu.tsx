import { Jumbotron } from "~/components/jumbotron";
import { CategoryTab } from "~/components/sections/menu/category-tab";

export default function Menu() {
    return (
        <>
            <Jumbotron title="Menu" />
            <section className="py-8">
                <div className="container mx-auto">
                    <CategoryTab />
                </div>
            </section>
        </>
    )
}