import Reveal from "@/components/editorial/Reveal";
import SectionHeading from "@/components/editorial/SectionHeading";
import ProductCard from "@/components/store/ProductCard";
import { getFeaturedProducts } from "@/lib/product-service";

export default async function FeaturedCollection() {
  const featured = (await getFeaturedProducts()).slice(0, 3);
  const [first, second, third] = featured;

  return (
    <section aria-labelledby="featured-heading" className="py-28 md:py-44">
      <div className="container-uc">
        <SectionHeading
          label="01 / The Collection"
          title="Built to remain."
          link={{ label: "View all garments", href: "/collection" }}
        />

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-12">
          {first ? (
            <Reveal className="md:col-span-7">
              <ProductCard product={first} />
            </Reveal>
          ) : null}
          {second ? (
            <Reveal delay={0.12} className="md:col-span-5 md:mt-32">
              <ProductCard product={second} />
            </Reveal>
          ) : null}
          {third ? (
            <Reveal
              delay={0.06}
              className="md:col-span-5 md:col-start-4 md:-mt-10"
            >
              <ProductCard product={third} />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
