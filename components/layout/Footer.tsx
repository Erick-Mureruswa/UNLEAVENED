import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const FOOTER_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "House",
    links: [
      { label: "About", href: "/about" },
      { label: "Craftsmanship", href: "/studio" },
      { label: "Philosophy", href: "/about#manifesto" },
    ],
  },
  {
    heading: "Wardrobe",
    links: [
      { label: "Collection", href: "/collection" },
      { label: "Archive", href: "/archive" },
      { label: "Studio", href: "/studio" },
    ],
  },
  {
    heading: "Paper",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "Remain Unaltered", href: "/journal/remain-unaltered" },
      { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone/70">
      <div className="container-uc py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
            {FOOTER_COLUMNS.slice(0, 2).map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <p className="label-uc mb-5 text-ash">{column.heading}</p>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm tracking-wide transition-opacity duration-500 ease-luxe hover:opacity-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Monogram */}
          <div className="order-first flex flex-col items-center gap-6 md:order-none">
            <span
              aria-hidden
              className="flex size-16 rotate-45 items-center justify-center border border-ink/60"
            >
              <span className="-rotate-45 font-display text-lg font-medium tracking-[0.1em]">
                UC
              </span>
            </span>
            <p className="font-display text-xl tracking-tight">
              Remain Unaltered.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:justify-items-end">
            {FOOTER_COLUMNS.slice(2).map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <p className="label-uc mb-5 text-ash">{column.heading}</p>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm tracking-wide transition-opacity duration-500 ease-luxe hover:opacity-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div>
              <p className="label-uc mb-5 text-ash">Elsewhere</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com/unleavened.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm tracking-wide transition-opacity duration-500 ease-luxe hover:opacity-50"
                  >
                    @unleavened.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-stone/70 pt-8 md:flex-row">
          <p className="label-uc text-ash">
            © {new Date().getFullYear()} UNLEAVENED Co. All rights reserved.
          </p>
          <p className="label-uc text-ash">Authenticity cannot be manufactured.</p>
        </div>
      </div>
    </footer>
  );
}
