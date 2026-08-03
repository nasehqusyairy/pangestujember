import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router";

export function TestimonySection() {
    return (
        <section id="testimony" className="bg-primary py-24">
            <div className="container mx-auto">
                <h1 className="text-primary-foreground text-center uppercase text-xl mb-4">Testimoni</h1>
                <h1 className="text-primary-foreground text-center text-4xl font-bold mb-24">Apa Kata Mereka?</h1>
                <div className="grid lg:grid-cols-3 gap-12 mb-24">
                    <div className="grid gap-8 text-primary-foreground">
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
                    </div>
                    <div className="grid gap-8 text-primary-foreground">
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
                    </div>
                    <div className="grid gap-8 text-primary-foreground">
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
                    </div>
                </div>
                <p className="text-center text-primary-foreground underline uppercase">
                    <Link to={'#'}>
                        Lihat Selengkapnya <ArrowRight className="inline-block" />
                    </Link>
                </p>
            </div>
        </section>
    )
}