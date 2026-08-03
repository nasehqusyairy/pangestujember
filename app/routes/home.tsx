import { Navbar } from "~/components/navbar";
import { AboutSection } from "~/components/sections/home/about-section";
import { CareerSection } from "~/components/sections/home/career-section";
import { FooterSection } from "~/components/sections/home/footer-section";
import { HeroSection } from "~/components/sections/home/hero-section";
import { LocationSection } from "~/components/sections/home/location-section";
import { MenuSection } from "~/components/sections/home/menu-section";
import { TestimonySection } from "~/components/sections/home/testimony-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <LocationSection />
      <TestimonySection />
      <CareerSection />
      <FooterSection />
    </>
  );
}
