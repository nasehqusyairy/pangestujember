import { Button } from "~/components/ui/button";
import { MessageSquareText } from 'lucide-react'
import { AnimatedSection } from "../../animated-section";

export function HeroSection() {
    return (
        <section style={{
            backgroundImage: "linear-gradient(rgba(1, 45, 29, 0.2), rgba(1, 45, 29, 0.2)), url(/images/hero.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="container py-12 mx-auto h-full">
                <div className="grid lg:grid-cols-7 h-full">
                    <AnimatedSection className="lg:col-span-4 h-full bg-primary/50 backdrop-blur-sm border rounded-lg border-white/10 lg:p-xl p-8" delay={0.1}>
                        <h1 className="uppercase text-primary-foreground mb-4 text-xl">Warisan Kuliner Indonesia</h1>
                        <h2 className="text-primary-foreground text-4xl lg:text-6xl mb-8 font-bold">
                            Cita Rasa Otentik di Jember
                        </h2>
                        <p className="text-primary-foreground font-heading mb-8 text-xl">
                            Nikmati keajaiban bumbu tradisional yang diracik dengan penuh
                            cinta, membawa Anda ke dalam perjalanan rasa melintasi sejarah dan
                            tradisi Jawa Timur.
                        </p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-2 grid gap-4">
                                <Button size={'lg'}><MessageSquareText /> Pesan via WhatsApp</Button>
                                <Button variant={'outline'} className={'border-white text-white'} size={'lg'}>Lihat Menu</Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}