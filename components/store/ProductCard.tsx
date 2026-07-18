import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  className?: string;
};

export default function ProductCard({
  product,
  priority = false,
  className,
}: ProductCardProps) {
  const [primary, secondary] = product.images;

  return (
    <Link
      href={`/collection/${product.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone/40">
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={cn(
            "object-cover transition-all duration-1000 ease-luxe group-hover:scale-[1.03]",
            secondary && "group-hover:opacity-0"
          )}
        />
        {secondary ? (
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover opacity-0 transition-all duration-1000 ease-luxe group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : null}
        <span className="label-uc absolute bottom-5 left-5 translate-y-2 bg-bone px-3 py-2 opacity-0 transition-all duration-700 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          View Garment
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="label-uc mb-1.5 text-ash">
            {product.code} / {product.colorway}
          </p>
          <h3 className="font-display text-lg tracking-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-charcoal">
            {product.fit} {product.weight}.
          </p>
        </div>
        <p className="label-uc mt-6 shrink-0">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
