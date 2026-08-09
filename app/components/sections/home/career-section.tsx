import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "~/components/ui/item";
import { AnimatedSection } from "../../animated-section";

export function CareerSection() {
    return (
        <section id="career" className="py-8 bg-card">
            <div className="container mx-auto">
                <AnimatedSection className="text-left" delay={0.1}>
                    <h1 className="uppercase text-secondary text-xl mb-4">Karir</h1>
                    <h1 className="text-primary text-4xl mb-12">Bergabung Bersama Kami</h1>
                </AnimatedSection>
                <div className="grid gap-8 mb-8">
                    <AnimatedSection delay={0.1}>
                        <Item variant="outline" className="bg-white p-12">
                            <ItemContent className="gap-2">
                                <ItemTitle className="text-2xl text-primary">Kepala Koki</ItemTitle>
                                <ItemDescription className="text-lg">
                                    A simple item with title and description.
                                </ItemDescription>
                                <div className="flex lg:grid grid-cols-8 gap-8 text-secondary uppercase">
                                    <span>Full Time</span>
                                    <span>Pusat</span>
                                </div>
                            </ItemContent>
                            <ItemActions>
                                <Button size="lg">
                                    Lamar Sekarang
                                </Button>
                            </ItemActions>
                        </Item>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <Item variant="outline" className="bg-white p-12">
                            <ItemContent className="gap-2">
                                <ItemTitle className="text-2xl text-primary">Manajer Lantai</ItemTitle>
                                <ItemDescription className="text-lg">
                                    A simple item with title and description.
                                </ItemDescription>
                                <div className="flex lg:grid grid-cols-8 gap-8 text-secondary uppercase">
                                    <span>Full Time</span>
                                    <span>Pusat</span>
                                </div>
                            </ItemContent>
                            <ItemActions>
                                <Button size="lg">
                                    Lamar Sekarang
                                </Button>
                            </ItemActions>
                        </Item>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <Item variant="outline" className="bg-white p-12">
                            <ItemContent className="gap-2">
                                <ItemTitle className="text-2xl text-primary">Barista</ItemTitle>
                                <ItemDescription className="text-lg">
                                    A simple item with title and description.
                                </ItemDescription>
                                <div className="flex lg:grid grid-cols-8 gap-8 text-secondary uppercase">
                                    <span>Full Time</span>
                                    <span>Pusat</span>
                                </div>
                            </ItemContent>
                            <ItemActions>
                                <Button size="lg">
                                    Lamar Sekarang
                                </Button>
                            </ItemActions>
                        </Item>
                    </AnimatedSection>
                </div>
                <AnimatedSection className="text-center" delay={0.2}>
                    <p className="text-secondary underline uppercase">
                        <Link to={'#'}>
                            Lihat Selengkapnya <ArrowRight className="inline-block" />
                        </Link>
                    </p>
                </AnimatedSection>
            </div>
        </section>
    )
}