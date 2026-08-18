import { Button } from "~/components/ui/button";
import { ShoppingCart } from 'lucide-react'
import { AnimatedSection } from "../../animated-section";
import { homeContent } from "~/lib/data";

const h = homeContent.hero;

const toMenuSection = () => {
    const element = document.getElementById("menu")!;
    element.scrollIntoView({ behavior: 'smooth' });
}

export function HeroSection() {
    return (
        <section style={{
            backgroundImage: `linear-gradient(rgba(1, 45, 29, 0.2), rgba(1, 45, 29, 0.2)), url(${h.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="container py-12 mx-auto h-full">
                <div className="grid lg:grid-cols-7 h-full">
                    <AnimatedSection className="lg:col-span-4 h-full bg-primary/50 backdrop-blur-sm border rounded-lg border-white/10 lg:p-xl p-8" delay={0.1}>
                        <h1 className="text-primary-foreground text-4xl lg:text-6xl mb-8 font-bold">{h.title}</h1>
                        <p className="text-primary-foreground font-heading mb-8 text-xl">{h.paragraph}</p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-2 grid gap-4">
                                <Button
                                    variant={'outline'}
                                    className={'border-white text-white'}
                                    size={'lg'}
                                    onClick={toMenuSection}
                                >
                                    <ShoppingCart /> {h.actionButton}
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}