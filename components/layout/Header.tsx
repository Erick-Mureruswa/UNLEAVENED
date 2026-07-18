"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart/CartProvider";

const SCROLL_THRESHOLD = 24;

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "label-uc transition-opacity duration-500 ease-luxe hover:opacity-50",
        active ? "opacity-100" : "opacity-80"
      )}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const allLinks = [...NAV_LEFT, ...NAV_RIGHT];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-all duration-700 ease-luxe",
          isScrolled
            ? "border-stone/70 bg-bone/95"
            : "border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "container-uc flex items-center justify-between transition-all duration-700 ease-luxe",
            isScrolled ? "py-3.5" : "py-6 md:py-8"
          )}
        >
          <nav
            aria-label="Editorial"
            className="hidden flex-1 items-center gap-8 lg:flex"
          >
            {NAV_LEFT.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                active={pathname.startsWith(link.href)}
              />
            ))}
          </nav>

          <button
            type="button"
            className="label-uc flex-1 text-left lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>

          <Link
            href="/"
            aria-label="UNLEAVENED Co. Home"
            className="font-display text-base font-medium tracking-[0.35em] md:text-lg"
          >
            UNLEAVENED
          </Link>

          <nav
            aria-label="Main"
            className="hidden flex-1 items-center justify-end gap-8 lg:flex"
          >
            {NAV_RIGHT.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                active={pathname.startsWith(link.href)}
              />
            ))}
            <button
              type="button"
              onClick={openCart}
              className="label-uc transition-opacity duration-500 ease-luxe hover:opacity-50"
            >
              Cart{count > 0 ? ` (${count})` : ""}
            </button>
          </nav>
          <span className="flex flex-1 justify-end lg:hidden">
            <button
              type="button"
              onClick={openCart}
              className="label-uc transition-opacity duration-500 ease-luxe hover:opacity-50"
            >
              Cart{count > 0 ? ` (${count})` : ""}
            </button>
          </span>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-30 flex flex-col justify-center bg-bone transition-opacity duration-700 ease-luxe lg:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="container-uc flex flex-col gap-6">
          {allLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "font-serif text-4xl tracking-tight transition-all duration-700 ease-luxe",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isMenuOpen ? `${index * 70}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <p className="label-uc mt-10 text-ash">Remain Unaltered.</p>
        </nav>
      </div>
    </>
  );
}
