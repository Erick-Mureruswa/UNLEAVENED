"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/editorial/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <section aria-labelledby="newsletter-heading" className="py-28 md:py-44">
      <div className="container-uc">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="label-uc mb-4 text-ash">05 / Correspondence</p>
            <h2
              id="newsletter-heading"
              className="font-serif text-4xl tracking-tight md:text-5xl"
            >
              Remain Connected.
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal">
              Occasional letters on new garments, materials, and the studio.
              Written slowly. Sent rarely.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            {isSubmitted ? (
              <p className="mt-12 font-mono text-sm tracking-[0.08em]" role="status">
                Received. We write rarely, but we write.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-12 flex items-end gap-6 text-left"
              >
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="label-uc text-ash">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-ink/50 bg-transparent pb-3 font-mono text-sm tracking-[0.05em] placeholder:text-ash focus:border-ink focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="label-uc border border-ink bg-ink px-8 py-3.5 text-bone transition-colors duration-500 ease-luxe hover:bg-transparent hover:text-ink"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
