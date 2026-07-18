import Link from "next/link";
import Reveal from "@/components/editorial/Reveal";

export default function Manifesto() {
  return (
    <section aria-labelledby="manifesto-heading" className="bg-ink text-bone">
      <div className="container-uc py-32 md:py-48">
        <Reveal>
          <p className="label-uc mb-12 text-ash">04 / The Manifesto</p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote
            id="manifesto-heading"
            className="max-w-4xl font-serif text-3xl leading-[1.25] tracking-tight md:text-5xl"
          >
            We reject unnecessary excess, empty trends, and fleeting attention. We
            create garments with intention, not urgency. Because what endures is
            never accidental.
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-10">
            <p className="font-display text-lg tracking-[0.2em]">
              REMAIN UNALTERED.
            </p>
            <Link
              href="/about"
              className="label-uc border-b border-bone/40 pb-1 transition-opacity duration-500 ease-luxe hover:opacity-50"
            >
              Read the full manifesto
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
