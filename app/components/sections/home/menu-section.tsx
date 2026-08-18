import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "../../animated-section";
import { MenuItemCard } from "~/components/menu-item-card";
import type { MenuItem } from "~/lib/data";

export function MenuSection(props: {
    favorites: MenuItem[]
}) {
    return (
        <section className="bg-card py-12" id="menu">
            <AnimatedSection className="text-center" delay={0.1}>
                <h1 className="text-secondary text-heading text-xl uppercase mb-4">Menu</h1>
                <h2 className="text-primary text-heading text-4xl mb-12">Andalan Kami</h2>
            </AnimatedSection>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {props.favorites.map((el, i) => (
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