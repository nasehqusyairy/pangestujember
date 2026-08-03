import { ArrowRight, Clock, LocationEditIcon, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export function LocationSection() {
    return (
        <section id="location" className="py-24">
            <div className="container mx-auto">
                <h1 className="uppercase text-xl text-secondary text-center mb-4">Lokasi</h1>
                <h2 className="text-primary text-4xl text-center font-bold mb-12">Oulet Kami</h2>
                <div className="grid lg:grid-cols-3 gap-12 mb-24">
                    <Card className="py-12">
                        <CardHeader className="px-12">
                            <CardTitle>Pangestu Pusat</CardTitle>
                        </CardHeader>
                        <CardContent className="px-12">
                            <div className="flex gap-2 mb-4">
                                <MapPin className="text-secondary" />
                                <p>Jl. Trunojoyo No. 42, Kaliwates, Jember</p>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Phone className="text-secondary" />
                                <p>(0331) 487 123</p>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Clock className="text-secondary" />
                                <p>10:00 - 22:00</p>
                            </div>
                        </CardContent>
                        <CardFooter className="px-12 pb-12 bg-card border-0 underline">
                            <Link to={'#'} className="uppercase text-secondary">Lihat di Peta</Link>
                        </CardFooter>
                    </Card>
                    <Card className="py-12">
                        <CardHeader className="px-12">
                            <CardTitle>Pangestu Gajah Mada</CardTitle>
                        </CardHeader>
                        <CardContent className="px-12">
                            <div className="flex gap-2 mb-4">
                                <MapPin className="text-secondary" />
                                <p>Jl. Trunojoyo No. 42, Kaliwates, Jember</p>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Phone className="text-secondary" />
                                <p>(0331) 487 123</p>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Clock className="text-secondary" />
                                <p>10:00 - 22:00</p>
                            </div>
                        </CardContent>
                        <CardFooter className="px-12 pb-12 bg-card border-0 underline">
                            <Link to={'#'} className="uppercase text-secondary">Lihat di Peta</Link>
                        </CardFooter>
                    </Card>
                    <Card className="py-12">
                        <CardHeader className="px-12">
                            <CardTitle>Pangestu Patrang</CardTitle>
                        </CardHeader>
                        <CardContent className="px-12">
                            <div className="flex gap-2 mb-4">
                                <MapPin className="text-secondary" />
                                <p>Jl. Trunojoyo No. 42, Kaliwates, Jember</p>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Phone className="text-secondary" />
                                <p>(0331) 487 123</p>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Clock className="text-secondary" />
                                <p>10:00 - 22:00</p>
                            </div>
                        </CardContent>
                        <CardFooter className="px-12 pb-12 bg-card border-0 underline">
                            <Link to={'#'} className="uppercase text-secondary">Lihat di Peta</Link>
                        </CardFooter>
                    </Card>
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