"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;
const HEADLINE_LINES = ["AUTHENTICITY", "CANNOT BE", "MANUFACTURED."];

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="hero-heading" className="pt-36 md:pt-48">
      <div className="container-uc">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_LUXE }}
          className="label-uc mb-10 flex items-center justify-between text-ash md:mb-14"
        >
          <span>FW26 / Foundation Capsule</span>
          <span aria-hidden className="hidden md:inline">
            Unaltered. Intentional. Timeless.
          </span>
          <span>Est. 2023</span>
        </motion.div>

        <h1
          id="hero-heading"
          className="text-center font-serif text-[clamp(2.75rem,9vw,8.5rem)] leading-[1.02] tracking-tight"
        >
          {HEADLINE_LINES.map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reducedMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + index * 0.14,
                  ease: EASE_LUXE,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: EASE_LUXE }}
          className="mt-16 md:mt-24"
        >
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
            <Image
              src="/images/products/uc-001-bone-front.png"
              alt="UC-001 Heavyweight Tee in Bone, suspended against cast concrete architecture"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1600px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
          <div className="label-uc mt-5 flex items-center justify-between text-ash">
            <span>UC-001 Heavyweight Tee / Bone</span>
            <span>300 GSM. Combed Cotton. Garment Washed.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
