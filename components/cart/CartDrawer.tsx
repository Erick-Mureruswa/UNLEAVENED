"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { buildWhatsAppOrderUrl } from "@/lib/cart";
import { recordOrderEnquiry } from "@/lib/orders";
import { formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, removeItem, updateQty } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-40 bg-ink/30 transition-opacity duration-700 ease-luxe",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-stone/70 bg-bone transition-transform duration-700 ease-luxe",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-stone/70 px-8 py-6">
          <p className="label-uc">Cart</p>
          <button
            type="button"
            onClick={closeCart}
            className="label-uc text-ash transition-opacity duration-500 ease-luxe hover:opacity-50"
          >
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <p className="font-serif text-2xl tracking-tight">
              Your cart is empty.
            </p>
            <Link
              href="/collection"
              onClick={closeCart}
              className="label-uc border-b border-ink/40 pb-1 transition-opacity duration-500 ease-luxe hover:opacity-50"
            >
              View the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-8 py-6">
              {items.map((item) => (
                <li
                  key={`${item.slug}-${item.size}`}
                  className="flex gap-5 border-b border-stone/70 py-6 first:pt-0"
                >
                  <div className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden bg-stone/40">
                    <Image
                      src={item.image}
                      alt={`${item.name} in ${item.colorway}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="label-uc text-ash">{item.code}</p>
                        <p className="mt-1 font-display text-sm tracking-tight">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs text-charcoal">
                          {item.colorway} / Size {item.size}
                        </p>
                      </div>
                      <p className="font-mono text-xs tracking-[0.05em]">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-stone">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() =>
                            updateQty(item.slug, item.size, item.qty - 1)
                          }
                          className="px-3 py-1.5 font-mono text-sm transition-opacity hover:opacity-50"
                        >
                          &minus;
                        </button>
                        <span className="min-w-8 text-center font-mono text-xs">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() =>
                            updateQty(item.slug, item.size, item.qty + 1)
                          }
                          className="px-3 py-1.5 font-mono text-sm transition-opacity hover:opacity-50"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug, item.size)}
                        className="label-uc text-ash transition-opacity duration-500 ease-luxe hover:opacity-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-stone/70 px-8 py-6">
              <div className="flex items-baseline justify-between">
                <p className="label-uc text-ash">Subtotal</p>
                <p className="font-mono text-sm tracking-[0.05em]">
                  {formatPrice(subtotal)}
                </p>
              </div>
              <a
                href={buildWhatsAppOrderUrl(items)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => void recordOrderEnquiry(items)}
                className="label-uc mt-6 block border border-ink bg-ink px-8 py-4 text-center text-bone transition-colors duration-500 ease-luxe hover:bg-transparent hover:text-ink"
              >
                Checkout via WhatsApp
              </a>
              <p className="mt-4 text-center text-xs leading-relaxed text-ash">
                Your order opens in WhatsApp and is confirmed personally by the
                studio.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
