import { Clock, MapPin, Phone } from "lucide-react";
import { Jumbotron } from "~/components/jumbotron";
import { outlets } from "~/lib/data";

export default function Outlets() {
    return (
        <>
            <Jumbotron title="Outlet" />
            <section className="py-8">
                <div className="container mx-auto">
                    {outlets.map((o) => (
                        <div className="grid lg:flex gap-2 lg:gap-8 items-end mb-8">
                            <iframe
                                title={o.title}
                                src={`https://maps.google.com/maps?q=${o.lat},${o.lng}&z=15&output=embed`}
                                className="aspect-video rounded lg:w-1/2"
                                loading="lazy"
                            />
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 gap-2 mb-2">
                                    <div className="aspect-video overflow-hidden rounded">
                                        <img src="/images/ab1.png" alt="Location Preview" className="w-full" loading="lazy" />
                                    </div>
                                    <div className="aspect-video overflow-hidden rounded">
                                        <img src="/images/ab1.png" alt="Location Preview" className="w-full" loading="lazy" />
                                    </div>
                                    <div className="aspect-video overflow-hidden rounded">
                                        <img src="/images/ab1.png" alt="Location Preview" className="w-full" loading="lazy" />
                                    </div>
                                    <div className="aspect-video overflow-hidden rounded">
                                        <img src="/images/ab1.png" alt="Location Preview" className="w-full" loading="lazy" />
                                    </div>
                                    <div className="aspect-video overflow-hidden rounded">
                                        <img src="/images/ab1.png" alt="Location Preview" className="w-full" loading="lazy" />
                                    </div>
                                    <div className="aspect-video overflow-hidden rounded">
                                        <img src="/images/ab1.png" alt="Location Preview" className="w-full" loading="lazy" />
                                    </div>
                                </div>
                                <h2 className="text-primary text-2xl">{o.title}</h2>
                                <p className="flex gap-2 items-center"><MapPin className="size-4 text-secondary" /> {o.address}</p>
                                <p className="flex gap-2 items-center"><Phone className="size-4 text-secondary" /><a href={`https://wa.me/${o.phone}`} className="underline">{o.phone}</a></p>
                                <p className="flex gap-2 items-center"><Clock className="size-4 text-secondary" />{o.hours}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
