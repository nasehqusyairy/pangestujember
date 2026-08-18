import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "../../animated-section";
import { homeContent } from "~/lib/data";

export function AboutSection() {
    const c = homeContent.aboutSection;

    return (
        <section className="container mx-auto py-24">
            <div className="grid lg:grid-cols-5 gap-24 items-center">
                <AnimatedSection className="col-span-2 hidden lg:block" delay={0.1}>
                    <img src={c.image} alt="About Image" className="w-full" />
                </AnimatedSection>
                <AnimatedSection className="col-span-3" delay={0.2}>
                    <h1 className="text-secondary uppercase mb-4 text-xl">{c.headingSmall}</h1>
                    <h2 className="text-primary text-4xl mb-8">{c.heading}</h2>
                    {c.paragraphs!.map((p, i) => (
                        <p key={i} className=" mb-8 text-xl">{p}</p>
                    ))}
                    <Link to={'#'} className="underline text-secondary flex gap-2 items-center font-heading uppercase">Lihat Selengkapnya <ArrowRight /></Link>
                </AnimatedSection>
            </div>
        </section>
    )
}