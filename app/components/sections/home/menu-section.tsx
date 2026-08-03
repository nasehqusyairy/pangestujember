import { ArrowRight, ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { AnimatedSection } from "./animated-section";

export function MenuSection() {
    return (
        <div className="bg-card py-24">
            <AnimatedSection className="text-center" delay={0.1}>
                <h1 className="text-secondary text-heading text-xl uppercase mb-4">Menu</h1>
                <h2 className="text-primary text-heading text-4xl mb-12 font-bold">Favorit Pelanggan</h2>
            </AnimatedSection>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 gap-12 mb-24">
                    <AnimatedSection delay={0.1}>
                        <Card className="relative pt-0 bg-white h-full">
                            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img
                                src="https://baconmockup.com/300/200"
                                alt="Event cover"
                                className="relative z-20 aspect-video w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>Nasi Campur Spesial</CardTitle>
                                <CardDescription>
                                    Rp. 24. 000
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Paduan nasi harum dengan lauk pauk khas
                                Jember, daging empuk bumbu rahasia, dan…
                            </CardContent>
                            <CardFooter className="border-t-0 bg-white">
                                <Button className="w-full border-primary text-primary" variant={'outline'} size={'lg'}><ShoppingBasket /> Pesan Sekarang</Button>
                            </CardFooter>
                        </Card>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <Card className="relative pt-0 bg-white h-full">
                            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img
                                src="https://baconmockup.com/600/400"
                                alt="Event cover"
                                className="relative z-20 aspect-video w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>Sate Pangestu</CardTitle>
                                <CardDescription>
                                    Rp. 24. 000
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Paduan nasi harum dengan lauk pauk khas
                                Jember, daging empuk bumbu rahasia, dan…
                            </CardContent>
                            <CardFooter className="border-t-0 bg-white">
                                <Button className="w-full border-primary text-primary" variant={'outline'} size={'lg'}><ShoppingBasket /> Pesan Sekarang</Button>
                            </CardFooter>
                        </Card>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <Card className="relative pt-0 bg-white h-full">
                            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img
                                src="https://baconmockup.com/150/100"
                                alt="Event cover"
                                className="relative z-20 aspect-video w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>Rawon Jember</CardTitle>
                                <CardDescription>
                                    Rp. 24. 000
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Paduan nasi harum dengan lauk pauk khas
                                Jember, daging empuk bumbu rahasia, dan…
                            </CardContent>
                            <CardFooter className="border-t-0 bg-white">
                                <Button className="w-full border-primary text-primary" variant={'outline'} size={'lg'}><ShoppingBasket /> Pesan Sekarang</Button>
                            </CardFooter>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
            <AnimatedSection className="text-center" delay={0.2}>
                <p className="text-secondary underline uppercase">
                    <Link to={'#'}>
                        Lihat Selengkapnya <ArrowRight className="inline-block" />
                    </Link>
                </p>
            </AnimatedSection>
        </div>
    )
}