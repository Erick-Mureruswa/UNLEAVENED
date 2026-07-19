import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/editorial/Reveal";
import SectionHeading from "@/components/editorial/SectionHeading";
import { formatDate } from "@/lib/journal";
import { getArticles } from "@/lib/article-service";

export default async function JournalPreview() {
  const articles = await getArticles();
  const latest = articles.slice(0, 2);

  return (
    <section aria-labelledby="journal-heading" className="py-28 md:py-44">
      <div className="container-uc">
        <SectionHeading
          label="03 / The Journal"
          title="Notes on remaining."
          link={{ label: "Read the journal", href: "/journal" }}
        />

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {latest.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.12}>
              <Link
                href={`/journal/${article.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-stone/40">
                  <Image
                    src={article.cover.src}
                    alt={article.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-luxe group-hover:scale-[1.03]"
                  />
                </div>
                <p className="label-uc mt-6 text-ash">
                  {article.category} / {formatDate(article.date)}
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                  {article.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-charcoal">
                  {article.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
