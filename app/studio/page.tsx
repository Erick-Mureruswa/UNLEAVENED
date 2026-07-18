import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/editorial/Reveal";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Behind the garments: material sourcing, construction decisions, sketches, and process from the UNLEAVENED Co. studio.",
};

const PROCESS = [
  {
    stage: "01",
    name: "Material",
    detail:
      "Fabric is chosen before silhouette. We work from 300 GSM combed cotton upward. Weight first, everything else after.",
  },
  {
    stage: "02",
    name: "Construction",
    detail:
      "Cover stitching, side seams, ribbing tested against years of washing. If a seam exists, it carries load.",
  },
  {
    stage: "03",
    name: "Wash",
    detail:
      "Every garment is washed or dyed after construction, so it arrives soft, settled, and already yours.",
  },
  {
    stage: "04",
    name: "Restraint",
    detail:
      "The last step is removal. Branding is reduced until only the neck label and a hem tag remain.",
  },
] as const;

export default function StudioPage() {
  return (
    <div className="container-uc pb-28 pt-36 md:pb-44 md:pt-48">
      <Reveal className="mb-16 max-w-3xl md:mb-24">
        <p className="label-uc mb-4 text-ash">The Studio</p>
        <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
          Where restraint is made.
        </h1>
        <p className="mt-8 max-w-xl leading-relaxed text-charcoal">
          Sketches, material sourcing, factory visits, and the slow decisions
          between them. Nothing here is finished. That is the point.
        </p>
      </Reveal>

      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone/40">
            <Image
              src="/images/products/uc-005-black-illustrated-alt.png"
              alt="Illustrated artwork in progress on a jet black tee, stencil doorways on concrete"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <p className="label-uc mt-5 text-ash">
            UC-005 artwork. Muted palette tests against concrete.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <div className="relative aspect-[3/4] overflow-hidden bg-stone/40">
            <Image
              src="/images/products/uc-004-charcoal-doorway.png"
              alt="Charcoal doorway tee with burnished copper accent print"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <p className="label-uc mt-5 text-ash">
            Copper. The rare accent, used sparingly.
          </p>
        </Reveal>
      </div>

      <section aria-label="Process" className="mt-28 md:mt-44">
        <Reveal className="mb-14">
          <p className="label-uc mb-4 text-ash">Process</p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Four decisions, repeated.
          </h2>
        </Reveal>
        <div className="grid gap-px border border-stone/70 bg-stone/70 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <Reveal key={step.stage} delay={index * 0.06} className="bg-bone p-8 md:p-10">
              <p className="font-mono text-sm text-ash">{step.stage}</p>
              <h3 className="mt-6 font-display text-xl tracking-tight">
                {step.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
