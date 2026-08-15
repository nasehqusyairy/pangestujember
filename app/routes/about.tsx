import { Salad, Sprout, Utensils } from "lucide-react";
import { Jumbotron } from "~/components/jumbotron";
import { aboutContent } from "~/lib/data";

export default function About() {
    const first = aboutContent.sections[0];
    const second = aboutContent.sections[1];
    const third = aboutContent.sections[2];

    return (
        <>
            <Jumbotron title={aboutContent.jumbotronTitle} />

            <section className="container mx-auto pt-24 pb-12">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="col-span-2 hidden lg:block">
                        <img src={first.image} alt="About Image" className="w-full rounded-lg" />
                    </div>
                    <div className="col-span-3">
                        <h2 className="uppercase text-secondary text-xl mb-4">{first.headingSmall}</h2>
                        <h3 className="text-primary text-4xl mb-8">{first.heading}</h3>
                        {first.paragraphs!.map((p, i) => (
                            <p key={i} className=" mb-8 text-xl">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="uppercase text-secondary text-xl mb-4">{second.headingSmall}</h2>
                        <h3 className="text-primary text-4xl mb-8">{second.heading}</h3>
                        {second.paragraphs!.map((p: string, i: number) => (
                            <p key={i} className="text-xl mb-4">{p}</p>
                        ))}
                        <p className="text-xl text-foreground/80 border-secondary-foreground border-s-4 italic ps-4">"{second.quote}"</p>
                    </div>
                    <div className="hidden lg:flex gap-4 items-center w-full">
                        {second.images!.map((src: string, i: number) => (
                            <img key={i} className="rounded-lg w-full" src={src} alt={`ab${i}`} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8 bg-card">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="uppercase text-secondary text-xl mb-4">{third.commitment!.headingSmall}</h2>
                        <h3 className="text-primary text-4xl mb-12">{third.commitment!.heading}</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white border rounded grid gap-8 lg:grid-cols-7 p-12 items-center">
                            <div className="col-span-4">
                                <Sprout className="text-primary size-8 mb-4" />
                                <h4 className="text-primary mb-4 text-2xl">{third.commitment!.cards[0].title}</h4>
                                <p>{third.commitment!.cards[0].text}</p>
                            </div>
                            <div className="col-span-3">
                                <img src="/images/ab3.png" alt="ab3" className="w-full rounded" />
                            </div>
                        </div>
                        <div className="bg-primary text-primary-foreground border border-primary rounded p-12">
                            <div>
                                <Utensils className="text-secondary-foreground size-8 mb-4" />
                                <h4 className="mb-4 text-2xl">{third.commitment!.cards[1].title}</h4>
                                <p>{third.commitment!.cards[1].text}</p>
                            </div>
                        </div>
                        <div className="bg-white border rounded p-12">
                            <div>
                                <Salad className="text-primary size-8 mb-4" />
                                <h4 className="text-primary mb-4 text-2xl">{third.commitment!.cards[2].title}</h4>
                                <p>{third.commitment!.cards[2].text}</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-secondary-foreground text-secondary border border-secondary/20 rounded grid gap-8 lg:grid-cols-7 p-12 items-center">
                            <div className="col-span-3">
                                <img src="/images/ab4.png" alt="ab3" className="w-full rounded" />
                            </div>
                            <div className="col-span-4">
                                <h4 className="mb-4 text-2xl">Lorem Ipsum Dolor</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid dolorum voluptatum optio. Assumenda non delectus debitis nesciunt eos, omnis ex molestias ut totam, fugit facere qui, nostrum magni id!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}