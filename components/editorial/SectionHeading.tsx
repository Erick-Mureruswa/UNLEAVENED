import Link from "next/link";
import Reveal from "@/components/editorial/Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  link?: { label: string; href: string };
};

export default function SectionHeading({ label, title, link }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
      <div>
        <p className="label-uc mb-4 text-ash">{label}</p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {link ? (
        <Link
          href={link.href}
          className="label-uc border-b border-ink/40 pb-1 transition-opacity duration-500 ease-luxe hover:opacity-50"
        >
          {link.label}
        </Link>
      ) : null}
    </Reveal>
  );
}
