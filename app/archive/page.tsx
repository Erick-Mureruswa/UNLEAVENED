import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/editorial/Reveal";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Every UNLEAVENED Co. collection, preserved. The archive begins with the FW26 Foundation Capsule.",
};

const COLLECTIONS = [
  {
    season: "FW26",
    name: "Foundation Capsule",
    status: "Current",
    detail:
      "Six heavyweight tees. The doorway, the manifesto, and the muted illustrated series. The pieces the house is built on.",
    href: "/collection",
  },
] as const;

export default function ArchivePage() {
  return (
    <div className="container-uc pb-28 pt-36 md:pb-44 md:pt-48">
      <Reveal className="mb-16 max-w-3xl md:mb-24">
        <p className="label-uc mb-4 text-ash">The Archive</p>
        <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
          Every collection, preserved.
        </h1>
        <p className="mt-8 max-w-xl leading-relaxed text-charcoal">
          Nothing we make is disposable, so nothing we make is discarded. Each
          capsule remains here, unaltered, as it was released.
        </p>
      </Reveal>

      <ol className="border-t border-stone/70">
        {COLLECTIONS.map((collection, index) => (
          <Reveal key={collection.season} delay={index * 0.06}>
            <li className="border-b border-stone/70">
              <Link
                href={collection.href}
                className="group grid gap-4 py-10 transition-opacity duration-500 ease-luxe hover:opacity-60 md:grid-cols-[8rem_1fr_auto] md:items-baseline md:gap-10"
              >
                <span className="font-mono text-sm tracking-[0.1em]">
                  {collection.season}
                </span>
                <span>
                  <span className="block font-serif text-3xl tracking-tight md:text-4xl">
                    {collection.name}
                  </span>
                  <span className="mt-3 block max-w-xl text-sm leading-relaxed text-charcoal">
                    {collection.detail}
                  </span>
                </span>
                <span className="label-uc text-ash">{collection.status}</span>
              </Link>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-16">
        <p className="label-uc text-ash">
          The archive grows slowly. That is by design.
        </p>
      </Reveal>
    </div>
  );
}
