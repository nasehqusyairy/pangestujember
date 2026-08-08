import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "../../animated-section";

export function TestimonySection() {
    return (
        <section id="testimony" className="bg-primary py-24">
            <div className="container mx-auto">
                <AnimatedSection className="text-center" delay={0.1}>
                    <h1 className="text-primary-foreground uppercase text-xl mb-4">Testimoni</h1>
                    <h1 className="text-primary-foreground text-4xl mb-24">Apa Kata Mereka?</h1>
                </AnimatedSection>
                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    <AnimatedSection className="grid gap-8 text-primary-foreground" delay={0.1}>
                        <div className="text-center"><Quote className="inline-block size-12" /></div>
                        <blockquote className="italic text-center text-xl">
                            "Rawon Jember di sini benar-benar mengingatkan
                            saya pada masakan nenek. Rempahnya begitu
                            meresap dan dagingnya sangat empuk."
                        </blockquote>
                        <div className="text-center">
                            <div className="uppercase">Andini Puspita</div>
                            <div className="italic">Food Blogger, Surabaya</div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="grid gap-8 text-primary-foreground" delay={0.2}>
                        <div className="text-center"><Quote className="inline-block size-12" /></div>
                        <blockquote className="italic text-center text-xl">
                            "Rawon Jember di sini benar-benar mengingatkan
                            saya pada masakan nenek. Rempahnya begitu
                            meresap dan dagingnya sangat empuk."
                        </blockquote>
                        <div className="text-center">
                            <div className="uppercase">Andini Puspita</div>
                            <div className="italic">Food Blogger, Surabaya</div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="grid gap-8 text-primary-foreground" delay={0.3}>
                        <div className="text-center"><Quote className="inline-block size-12" /></div>
                        <blockquote className="italic text-center text-xl">
                            "Rawon Jember di sini benar-benar mengingatkan
                            saya pada masakan nenek. Rempahnya begitu
                            meresap dan dagingnya sangat empuk."
                        </blockquote>
                        <div className="text-center">
                            <div className="uppercase">Andini Puspita</div>
                            <div className="italic">Food Blogger, Surabaya</div>
                        </div>
                    </AnimatedSection>
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