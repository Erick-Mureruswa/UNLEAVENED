import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/editorial/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The founder story, manifesto, mission, and vision of UNLEAVENED Co., a premium minimalist streetwear house built on remaining unaltered.",
};

const PILLARS = [
  { name: "Authenticity", detail: "Nothing added. Nothing exaggerated." },
  { name: "Discipline", detail: "Consistency creates excellence." },
  { name: "Quiet Confidence", detail: "Presence without performance." },
  { name: "Craftsmanship", detail: "Luxury begins with construction." },
  { name: "Longevity", detail: "Pieces designed to age beautifully." },
] as const;

const TIMELINE = [
  { year: "Year 1", detail: "The signature essentials collection. Direct, journal-led, intentional." },
  { year: "Year 2", detail: "Outerwear, knitwear, and selective wholesale with respected boutiques." },
  { year: "Year 3", detail: "Editorial publications and collaborations with architects and artists." },
  { year: "Year 4", detail: "The first flagship: part retail, part gallery, part studio." },
  { year: "Year 5", detail: "An independent house recognised by quality, not logos." },
] as const;

export default function AboutPage() {
  return (
    <div className="pb-28 pt-36 md:pb-44 md:pt-48">
      <div className="container-uc">
        <Reveal className="max-w-4xl">
          <p className="label-uc mb-4 text-ash">The House</p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Not louder. Not trendier. Just authentic.
          </h1>
        </Reveal>

        {/* Founder story */}
        <div className="mt-24 grid gap-16 md:mt-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone/40">
              <Image
                src="/images/products/uc-006-charcoal-illustrated.png"
                alt="Charcoal illustrated tee hung against textured concrete"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <p className="label-uc mb-6 text-ash">Founder Story</p>
            <div className="space-y-6 text-lg leading-[1.8] text-charcoal">
              <p>
                UNLEAVENED Co. began with a simple frustration: too much fashion
                was asking people to become someone else. Every season introduced
                a new identity to chase.
              </p>
              <p>
                The answer wasn&rsquo;t louder graphics or faster trends. It was
                restraint. The name comes from unleavened bread: pure, unchanged,
                and uncompromised. The brand was founded on the belief that what
                is genuine needs no embellishment.
              </p>
              <p>
                UNLEAVENED Co. isn&rsquo;t about standing out. It&rsquo;s about
                standing firm.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Manifesto */}
      <section id="manifesto" aria-label="Manifesto" className="mt-28 bg-ink text-bone md:mt-44">
        <div className="container-uc py-32 md:py-44">
          <Reveal>
            <p className="label-uc mb-12 text-ash">The Manifesto</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-4xl space-y-10 font-serif text-2xl leading-[1.4] tracking-tight md:text-4xl">
              <p>We believe authenticity cannot be manufactured.</p>
              <p>The strongest foundations are often the quietest.</p>
              <p>
                We reject unnecessary excess, empty trends, and fleeting
                attention. We create garments with intention, not urgency.
              </p>
              <p>
                Every stitch serves a purpose. Every silhouette respects time.
              </p>
              <p>
                We design clothing that becomes part of your life rather than the
                center of it. Because what endures is never accidental.
              </p>
              <p className="font-display text-xl tracking-[0.2em] md:text-2xl">
                REMAIN UNALTERED.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-uc">
        {/* Pillars */}
        <section aria-label="Brand pillars" className="mt-28 md:mt-44">
          <Reveal className="mb-14">
            <p className="label-uc mb-4 text-ash">Pillars</p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              What we stand on.
            </h2>
          </Reveal>
          <dl className="border-t border-stone/70">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.name} delay={index * 0.05}>
                <div className="grid gap-2 border-b border-stone/70 py-6 md:grid-cols-2 md:items-baseline">
                  <dt className="font-display text-xl tracking-tight">
                    {pillar.name}
                  </dt>
                  <dd className="text-charcoal md:text-right">{pillar.detail}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Mission / Vision */}
        <section aria-label="Mission and vision" className="mt-28 grid gap-16 md:mt-44 md:grid-cols-2">
          <Reveal>
            <p className="label-uc mb-6 text-ash">Mission</p>
            <p className="font-serif text-2xl leading-[1.4] tracking-tight md:text-3xl">
              To create timeless essentials that help people express who they
              already are, instead of who the world expects them to become.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label-uc mb-6 text-ash">Vision</p>
            <p className="font-serif text-2xl leading-[1.4] tracking-tight md:text-3xl">
              To become the world&rsquo;s most respected minimalist streetwear
              house, proving that craftsmanship and authenticity outlast hype.
            </p>
          </Reveal>
        </section>

        {/* Timeline */}
        <section aria-label="Five-year vision" className="mt-28 md:mt-44">
          <Reveal className="mb-14">
            <p className="label-uc mb-4 text-ash">The Long View</p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Five years, unhurried.
            </h2>
          </Reveal>
          <ol className="border-t border-stone/70">
            {TIMELINE.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 0.05}>
                <li className="grid gap-2 border-b border-stone/70 py-6 md:grid-cols-[8rem_1fr] md:gap-10">
                  <span className="label-uc text-ash">{entry.year}</span>
                  <span className="text-charcoal">{entry.detail}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
