export const revalidate = 600;

import Hero from "@/components/sections/Hero";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import Craftsmanship from "@/components/sections/Craftsmanship";
import JournalPreview from "@/components/sections/JournalPreview";
import Manifesto from "@/components/sections/Manifesto";
import Newsletter from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Craftsmanship />
      <JournalPreview />
      <Manifesto />
      <Newsletter />
    </>
  );
}
