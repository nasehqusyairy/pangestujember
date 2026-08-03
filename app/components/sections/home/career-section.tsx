import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "~/components/ui/item";

export function CareerSection() {
    return (
        <section id="career" className="py-24 bg-card">
            <div className="container mx-auto">
                <h1 className="uppercase text-secondary text-xl mb-4">Karir</h1>
                <h1 className="text-primary font-bold text-4xl mb-12">Bergabung Bersama Kami</h1>
                <div className="grid gap-8 mb-24">
                    <Item variant="outline" className="bg-white rounded-none p-12">
                        <ItemContent className="gap-2">
                            <ItemTitle className="text-2xl text-primary">Kepala Koki</ItemTitle>
                            <ItemDescription className="text-lg">
                                A simple item with title and description.
                            </ItemDescription>
                            <div className="grid grid-cols-8 gap-8 text-secondary uppercase">
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
                    <Item variant="outline" className="bg-white rounded-none p-12">
                        <ItemContent className="gap-2">
                            <ItemTitle className="text-2xl text-primary">Manajer Lantai</ItemTitle>
                            <ItemDescription className="text-lg">
                                A simple item with title and description.
                            </ItemDescription>
                            <div className="grid grid-cols-8 gap-8 text-secondary uppercase">
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
                    <Item variant="outline" className="bg-white rounded-none p-12">
                        <ItemContent className="gap-2">
                            <ItemTitle className="text-2xl text-primary">Barista</ItemTitle>
                            <ItemDescription className="text-lg">
                                A simple item with title and description.
                            </ItemDescription>
                            <div className="grid grid-cols-8 gap-8 text-secondary uppercase">
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
                </div>
                <p className="text-center text-secondary underline uppercase">
                    <Link to={'#'}>
                        Lihat Selengkapnya <ArrowRight className="inline-block" />
                    </Link>
                </p>
            </div>
        </section>
    )
}