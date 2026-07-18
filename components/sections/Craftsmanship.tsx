import Image from "next/image";
import Reveal from "@/components/editorial/Reveal";

const SPECS = [
  { value: "300 GSM", detail: "Fabric weight. Structure over cling." },
  { value: "100% Cotton", detail: "Combed, ring-spun, nothing blended in." },
  { value: "Garment Washed", detail: "Broken in before it reaches you." },
] as const;

export default function Craftsmanship() {
  return (
    <section aria-labelledby="craft-heading" className="py-28 md:py-44">
      <div className="container-uc">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/products/uc-002-olive-doorway.png"
                alt="Doorway blueprint artwork printed tonal on an Olive Moss heavyweight tee"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <p className="label-uc mt-5 text-ash">
              UC-002 Doorway Tee. Water-based Bone ink on stone wash.
            </p>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
            <Reveal>
              <p className="label-uc mb-4 text-ash">02 / Craftsmanship</p>
              <h2
                id="craft-heading"
                className="font-serif text-4xl tracking-tight md:text-5xl"
              >
                Every stitch serves a purpose.
              </h2>
              <p className="mt-8 max-w-md leading-relaxed text-charcoal">
                Luxury begins with construction. Cover-stitched collars, side-seamed
                bodies, ribbing that holds its shape for years. We build heavier than
                necessary, then wash every garment so it arrives already yours.
              </p>
            </Reveal>

            <dl className="mt-12 border-t border-stone/70">
              {SPECS.map((spec, index) => (
                <Reveal key={spec.value} delay={index * 0.08}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-stone/70 py-5">
                    <dt className="font-mono text-sm tracking-[0.08em]">
                      {spec.value}
                    </dt>
                    <dd className="text-right text-sm text-ash">{spec.detail}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
