import type { Metadata } from "next";
import Reveal from "@/components/editorial/Reveal";
import ProductCard from "@/components/store/ProductCard";
import { getProducts } from "@/lib/product-service";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Collection",
  description:
    "FW26 Foundation Capsule. Heavyweight essentials produced intentionally: boxy fits, 300 GSM combed cotton, garment washed.",
};

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <div className="container-uc pb-28 pt-36 md:pb-44 md:pt-48">
      <Reveal className="mb-16 max-w-3xl md:mb-24">
        <p className="label-uc mb-4 text-ash">FW26 / Foundation Capsule</p>
        <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
          The Collection.
        </h1>
        <p className="mt-8 max-w-xl leading-relaxed text-charcoal">
          Six garments. One weight of cotton. Produced intentionally, in small
          quantities, and designed to disappear into your wardrobe and remain
          there for years.
        </p>
      </Reveal>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.code} delay={(index % 3) * 0.08}>
            <ProductCard product={product} priority={index < 3} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 border-t border-stone/70 pt-8">
        <p className="label-uc text-ash">
          Hoodies, sweatpants, and heavier fleece arrive with the winter
          capsule. Produced intentionally. Never rushed.
        </p>
      </Reveal>
    </div>
  );
}
