import { ArrowRight, ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { AnimatedSection } from "../../animated-section";
import { favoriteMenus, menuItems } from "~/lib/data";
import { MenuItemCard } from "~/components/menu-item-card";

const favorites = menuItems.filter(el => favoriteMenus.includes(el.id))

export function MenuSection() {
    return (
        <section className="bg-card py-12">
            <AnimatedSection className="text-center" delay={0.1}>
                <h1 className="text-secondary text-heading text-xl uppercase mb-4">Menu</h1>
                <h2 className="text-primary text-heading text-4xl mb-12">Favorit Pelanggan</h2>
            </AnimatedSection>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {favorites.map((el, i) => (
                        <AnimatedSection key={el.id} delay={0.1 * (i + 1)}>
                            <MenuItemCard {...el} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
            <AnimatedSection className="text-center" delay={0.2}>
                <p className="text-secondary underline uppercase">
                    <Link to={'/menu'}>
                        Lihat Selengkapnya <ArrowRight className="inline-block" />
                    </Link>
                </p>
            </AnimatedSection>
        </section>
    )
}