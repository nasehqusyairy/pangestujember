import { Jumbotron } from "~/components/jumbotron";
import { careers, outlets } from "~/lib/data";
import { createHashTable } from "~/lib/utils";

export default function Careers() {
    const outletDictionary = createHashTable(outlets);

    return (
        <>
            <Jumbotron title="Karir" />
            <section className="py-8">
                <div className="container mx-auto">
                    {careers.map((c) => (
                        <article key={c.id} className="mb-8">
                            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                                <div className="w-full lg:w-1/2 p-6 bg-white/60 rounded">
                                    <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
                                    <p className="mb-1">Lokasi: {outletDictionary[c.outlet_id]?.title ?? 'Outlet tidak ditemukan'}</p>
                                    <p className="mb-1">Waktu: {c.time}</p>
                                    <p className="mb-2">{c.description}</p>
                                </div>
                                <div className="w-full lg:w-1/2 p-6 bg-white/50 rounded">
                                    <h4 className="font-semibold mb-2">Persyaratan</h4>
                                    <ul className="list-disc pl-5">
                                        {c.requirements.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
