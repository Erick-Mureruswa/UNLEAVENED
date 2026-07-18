"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeHint, setShowSizeHint] = useState(false);

  const onAdd = () => {
    if (!selectedSize) {
      setShowSizeHint(true);
      return;
    }
    addItem({
      slug: product.slug,
      code: product.code,
      name: product.name,
      colorway: product.colorway,
      size: selectedSize,
      price: product.price,
      image: product.images[0].src,
    });
    openCart();
  };

  return (
    <div className="mt-10">
      <div className="flex items-baseline justify-between">
        <p className="label-uc text-ash">Size</p>
        {showSizeHint && !selectedSize ? (
          <p className="label-uc text-clay" role="alert">
            Select a size
          </p>
        ) : null}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {product.sizes.map((size) => (
          <button
            key={size}
            type="button"
            aria-pressed={selectedSize === size}
            onClick={() => {
              setSelectedSize(size);
              setShowSizeHint(false);
            }}
            className={cn(
              "min-w-12 border px-4 py-3 font-mono text-sm tracking-[0.1em] transition-colors duration-500 ease-luxe",
              selectedSize === size
                ? "border-ink bg-ink text-bone"
                : "border-stone hover:border-ink"
            )}
          >
            {size}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="label-uc mt-8 block w-full border border-ink bg-ink px-8 py-4 text-center text-bone transition-colors duration-500 ease-luxe hover:bg-transparent hover:text-ink"
      >
        Add to Cart
      </button>
      <p className="mt-5 text-center text-xs leading-relaxed text-ash">
        Produced intentionally. Checkout is completed personally over WhatsApp.
      </p>
    </div>
  );
}
