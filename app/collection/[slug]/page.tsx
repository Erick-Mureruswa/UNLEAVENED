import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/editorial/Reveal";
import ProductCard from "@/components/store/ProductCard";
import AddToCart from "@/components/store/AddToCart";
import { formatPrice } from "@/lib/products";
import {
  getProduct,
  getProducts,
  getRecommendations,
} from "@/lib/product-service";

export const revalidate = 600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.code} ${product.name} in ${product.colorway}`,
    description: product.story,
    openGraph: { images: [{ url: product.images[0].src }] },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const recommendations = await getRecommendations(product.slug, 3);

  return (
    <div className="container-uc pb-28 pt-36 md:pb-44 md:pt-48">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Gallery */}
        <div className="space-y-10 lg:col-span-7">
          {product.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden bg-stone/40">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Details */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="label-uc text-ash">
                {product.code} / FW26
              </p>
              <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 font-display text-lg text-charcoal">
                {product.colorway}
              </p>
              <p className="label-uc mt-6">{formatPrice(product.price)}</p>

              <dl className="mt-10 border-t border-stone/70">
                {[
                  ["Fit", product.fit],
                  ["Fabric", product.fabric],
                  ["Weight", product.weight],
                  ["Finish", product.finish],
                ].map(([term, detail]) => (
                  <div
                    key={term}
                    className="flex items-baseline justify-between gap-6 border-b border-stone/70 py-4"
                  >
                    <dt className="label-uc text-ash">{term}</dt>
                    <dd className="text-right font-mono text-sm tracking-[0.05em]">
                      {detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <AddToCart product={product} />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto mt-32 max-w-3xl md:mt-44">
        <Reveal>
          <p className="label-uc mb-6 text-ash">The Garment</p>
          <p className="font-serif text-2xl leading-[1.4] tracking-tight md:text-3xl">
            {product.story}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 sm:grid-cols-2">
          <Reveal>
            <h2 className="label-uc mb-6 text-ash">Construction</h2>
            <ul className="space-y-3">
              {product.construction.map((item) => (
                <li
                  key={item}
                  className="border-b border-stone/70 pb-3 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="label-uc mb-6 text-ash">Care</h2>
            <ul className="space-y-3">
              {product.care.map((item) => (
                <li
                  key={item}
                  className="border-b border-stone/70 pb-3 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-lg italic text-charcoal">
              Well-made things deserve attention.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-32 md:mt-44">
        <Reveal className="mb-14">
          <p className="label-uc mb-4 text-ash">Also in the capsule</p>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Considered alongside.
          </h2>
        </Reveal>
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item, index) => (
            <Reveal key={item.code} delay={index * 0.08}>
              <ProductCard product={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
