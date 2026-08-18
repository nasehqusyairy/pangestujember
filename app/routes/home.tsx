import { AboutSection } from "~/components/sections/home/about-section";
import { CareerSection } from "~/components/sections/home/career-section";
import { HeroSection } from "~/components/sections/home/hero-section";
import { LocationSection } from "~/components/sections/home/location-section";
import { MenuSection } from "~/components/sections/home/menu-section";
import { TestimonySection } from "~/components/sections/home/testimony-section";
import type { Career, MenuItem, Outlet } from "../lib/data";
import { fetchSheet } from "~/.server/utils";

export const loader = async () => {

  const [menuItems, outlets, careers] = await Promise.all([
    fetchSheet<MenuItem>('menus'),
    fetchSheet<Outlet>('outlets'),
    fetchSheet<Career>('careers'),
  ]);

  return {
    favorites: menuItems.filter(el => el.is_favorite),
    outlets: outlets.slice(0, 3),
    careers: careers.slice(0, 3)
  }
}

export default function Home(props: {
  loaderData: Awaited<ReturnType<typeof loader>>
}) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection favorites={props.loaderData.favorites} />
      <LocationSection outlets={props.loaderData.outlets} />
      <TestimonySection />
      <CareerSection careers={props.loaderData.careers} />
    </>
  );
}
