import { Clock, MapPin, Phone } from "lucide-react";
import { Jumbotron } from "~/components/jumbotron";
import { ZoomableImage } from "~/components/image-zoom";
import { type Outlet } from "~/lib/data";
import { fetchSheet } from "~/.server/utils";

export const loader = async () => {
    const outlets = await fetchSheet<Outlet>('outlets')
    return { outlets }
}

export default function Outlets(props: {
    loaderData: Awaited<ReturnType<typeof loader>>
}) {
    return (
        <>
            <Jumbotron title="Outlet" />
            <section className="py-8">
                <div className="container mx-auto">
                    {props.loaderData.outlets.map((o) => (
                        <div className="grid lg:flex gap-2 lg:gap-8 mb-8">
                            <iframe
                                title={o.title}
                                src={`https://maps.google.com/maps?q=${o.lat},${o.lng}&z=15&output=embed`}
                                className="aspect-video rounded lg:w-1/2"
                                loading="lazy"
                            />
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 gap-2 mb-2">
                                    {o.previews.map((src, index) => (
                                        <div key={index} className="aspect-video overflow-hidden rounded">
                                            <ZoomableImage
                                                src={src}
                                                alt={`Location preview ${index + 1}`}
                                                loading="lazy"
                                                className="w-full aspect-video"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <h2 className="text-primary text-2xl">{o.title}</h2>
                                <p className="flex gap-2 items-center">
                                    <a
                                        href={`https://www.google.com/maps?q=${o.lat},${o.lng}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline"
                                    >
                                        {o.address}
                                    </a>
                                </p>
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
