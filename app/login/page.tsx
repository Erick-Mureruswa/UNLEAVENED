import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/editorial/Reveal";

export const metadata: Metadata = {
  title: "Login",
  description: "Accounts open with the first collection release.",
};

export default function LoginPage() {
  return (
    <div className="container-uc flex min-h-[70vh] flex-col items-center justify-center pb-28 pt-36 text-center md:pt-48">
      <Reveal>
        <p className="label-uc mb-6 text-ash">Accounts</p>
        <h1 className="font-serif text-4xl tracking-tight md:text-6xl">
          Patience is part of the practice.
        </h1>
        <p className="mx-auto mt-8 max-w-md leading-relaxed text-charcoal">
          Accounts open alongside the first collection release. Until then, the
          journal is open to everyone.
        </p>
        <Link
          href="/journal"
          className="label-uc mt-12 inline-block border border-ink px-8 py-4 transition-colors duration-500 ease-luxe hover:bg-ink hover:text-bone"
        >
          Read the Journal
        </Link>
      </Reveal>
    </div>
  );
}
