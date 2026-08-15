import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "../../animated-section";
import { homeContent } from "~/lib/data";

export function TestimonySection() {
    const items = homeContent.testimony;

    return (
        <section id="testimony" className="bg-primary py-24">
            <div className="container mx-auto">
                <AnimatedSection className="text-center" delay={0.1}>
                    <h1 className="text-primary-foreground uppercase text-xl mb-4">Testimoni</h1>
                    <h1 className="text-primary-foreground text-4xl mb-24">Apa Kata Mereka?</h1>
                </AnimatedSection>
                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    {items.map((it, idx) => (
                        <AnimatedSection key={idx} className="grid gap-8 text-primary-foreground" delay={0.1 * (idx + 1)}>
                            <div className="text-center"><Quote className="inline-block size-12" /></div>
                            <blockquote className="italic text-center text-xl">"{it.quote}"</blockquote>
                            <div className="text-center">
                                <div className="uppercase">{it.name}</div>
                                <div className="italic">{it.role}</div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
                <AnimatedSection className="text-center" delay={0.2}>
                    <p className="text-primary-foreground underline uppercase">
                        <Link to={'#'}>
                            Lihat Selengkapnya <ArrowRight className="inline-block" />
                        </Link>
                    </p>
                </AnimatedSection>
            </div>
        </section>
    )
}