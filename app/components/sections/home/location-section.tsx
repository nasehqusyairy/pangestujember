import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { AnimatedSection } from "../../animated-section";
import type { Outlet } from "~/lib/data";

export function LocationSection(props: {
    outlets: Outlet[]
}) {
    return (
        <section id="location" className="py-12">
            <div className="container mx-auto">
                <AnimatedSection className="text-center" delay={0.1}>
                    <h1 className="uppercase text-xl text-secondary mb-4">Lokasi</h1>
                    <h2 className="text-primary text-4xl mb-12">Oulet Kami</h2>
                </AnimatedSection>
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    {props.outlets.map((o, i) => (
                        <AnimatedSection key={o.id} delay={0.1 * (i + 1)}>
                            <Card className="py-12 h-full">
                                <CardHeader className="px-12">
                                    <CardTitle>{o.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="px-12">
                                    <div className="flex gap-2 mb-4">
                                        <MapPin className="text-secondary" />
                                        <p>{o.address}</p>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <Phone className="text-secondary" />
                                        <p>{o.phone}</p>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <Clock className="text-secondary" />
                                        <p>{o.hours}</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="px-12 pb-12 bg-card border-0 underline">
                                    <Link to={'#'} className="uppercase text-secondary">Lihat di Peta</Link>
                                </CardFooter>
                            </Card>
                        </AnimatedSection>
                    ))}
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