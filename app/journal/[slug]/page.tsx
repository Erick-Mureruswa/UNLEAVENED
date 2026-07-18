import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/editorial/Reveal";
import { articles, formatDate, getArticle } from "@/lib/journal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { images: [{ url: article.cover.src }] },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <article className="pb-28 pt-36 md:pb-44 md:pt-48">
      <div className="container-uc">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label-uc text-ash">
            {article.category} / {formatDate(article.date)}
          </p>
          <h1 className="mt-6 font-serif text-5xl tracking-tight md:text-7xl">
            {article.title}
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 md:mt-20">
          <div className="relative aspect-[16/9] overflow-hidden bg-stone/40 md:aspect-[21/9]">
            <Image
              src={article.cover.src}
              alt={article.cover.alt}
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-2xl md:mt-28">
          {article.body.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <p className="mb-8 text-lg leading-[1.8] text-charcoal first:font-serif first:text-2xl first:leading-[1.5] first:text-ink">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-24 max-w-2xl border-t border-stone/70 pt-10">
          <p className="label-uc mb-4 text-ash">Next in the journal</p>
          <Link
            href={`/journal/${nextArticle.slug}`}
            className="font-serif text-3xl tracking-tight transition-opacity duration-500 ease-luxe hover:opacity-50"
          >
            {nextArticle.title}
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
