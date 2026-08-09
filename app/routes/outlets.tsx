import { Jumbotron } from "~/components/jumbotron";
import { outlets } from "~/lib/data";

export default function Outlets() {
    return (
        <>
            <Jumbotron title="Outlet" />
            <section className="py-8">
                <div className="container mx-auto">
                    {outlets.map((o) => (
                        <article key={o.id} className="mb-8">
                            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                                <div className="w-full lg:w-1/2">
                                    <iframe
                                        title={o.title}
                                        src={`https://maps.google.com/maps?q=${o.lat},${o.lng}&z=15&output=embed`}
                                        className="w-full h-64 lg:h-full border-0 rounded"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 bg-white/60 rounded">
                                    <h2 className="text-2xl font-semibold mb-2">{o.title}</h2>
                                    <p className="mb-2">{o.address}</p>
                                    <p className="mb-2">Telepon: <a href={`tel:${o.phone}`} className="text-primary">{o.phone}</a></p>
                                    <p>Jam buka: {o.hours}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
