export const revalidate = 600;

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/editorial/Reveal";
import { formatDate } from "@/lib/journal";
import { getArticles } from "@/lib/article-service";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on materials, architecture, philosophy, and craftsmanship. Written slowly, published rarely.",
};

export default async function JournalPage() {
  const [lead, ...rest] = await getArticles();

  return (
    <div className="container-uc pb-28 pt-36 md:pb-44 md:pt-48">
      <Reveal className="mb-16 max-w-3xl md:mb-24">
        <p className="label-uc mb-4 text-ash">The Journal</p>
        <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
          Notes on remaining.
        </h1>
      </Reveal>

      {/* Lead article */}
      <Reveal>
        <Link href={`/journal/${lead.slug}`} className="group block">
          <div className="relative aspect-[16/9] overflow-hidden bg-stone/40 md:aspect-[21/9]">
            <Image
              src={lead.cover.src}
              alt={lead.cover.alt}
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1400px"
              className="object-cover transition-transform duration-1000 ease-luxe group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-uc text-ash">
                {lead.category} / {formatDate(lead.date)}
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight md:text-5xl">
                {lead.title}
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-charcoal">{lead.excerpt}</p>
          </div>
        </Link>
      </Reveal>

      {/* Remaining articles */}
      <div className="mt-24 grid gap-x-10 gap-y-16 md:mt-32 md:grid-cols-3">
        {rest.map((article, index) => (
          <Reveal key={article.slug} delay={index * 0.08}>
            <Link
              href={`/journal/${article.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone/40">
                <Image
                  src={article.cover.src}
                  alt={article.cover.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-luxe group-hover:scale-[1.03]"
                />
              </div>
              <p className="label-uc mt-6 text-ash">
                {article.category} / {formatDate(article.date)}
              </p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
                {article.title}
              </h2>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
