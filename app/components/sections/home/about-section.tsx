import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "../../animated-section";

export function AboutSection() {
    return (
        <section className="container mx-auto py-24">
            <div className="grid lg:grid-cols-5 gap-24 items-center">
                <AnimatedSection className="col-span-2 hidden lg:block" delay={0.1}>
                    <img src={'/images/about.png'} alt="About Image" className="w-full" />
                </AnimatedSection>
                <AnimatedSection className="col-span-3" delay={0.2}>
                    <h1 className="text-secondary uppercase mb-4 text-xl">Tentang Kami</h1>
                    <h2 className="text-primary text-4xl mb-8">Tradisi yang Tetap Terjaga</h2>
                    <p className=" mb-8 text-xl">
                        Restoran Pangestu lahir dari keinginan sederhana: melestarikan resep-resep keluarga
                        yang telah dinikmati lintas generasi. Di Jember, kami bukan sekadar tempat makan,
                        melainkan sebuah wadah di mana warisan kuliner bertemu dengan standar penyajian
                        modern.
                    </p>
                    <p className="mb-8 text-xl">
                        Setiap bahan kami pilih secara teliti dari petani lokal untuk memastikan kesegaran optimal. Kami
                        percaya bahwa kualitas rasa dimulai dari integritas bahan baku dan ketulusan dalam mengolahnya.
                    </p>
                    <Link to={'#'} className="underline text-secondary flex gap-2 items-center font-heading uppercase">Lihat Selengkapnya <ArrowRight /></Link>
                </AnimatedSection>
            </div>
        </section>
    )
}