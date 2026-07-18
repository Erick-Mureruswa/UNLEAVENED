import { cache } from "react";
import { getSupabase } from "@/lib/supabase";
import {
  products as localProducts,
  type Product,
  type ProductImage,
} from "@/lib/products";

type ProductRow = {
  code: string;
  slug: string;
  name: string;
  colorway: string;
  fit: string;
  fabric: string;
  weight: string;
  finish: string;
  price: number;
  sizes: string[];
  images: ProductImage[];
  story: string;
  construction: string[];
  care: string[];
  featured: boolean;
};

function mapRow(row: ProductRow): Product {
  return {
    code: row.code,
    slug: row.slug,
    name: row.name,
    colorway: row.colorway,
    fit: row.fit,
    fabric: row.fabric,
    weight: row.weight,
    finish: row.finish,
    price: row.price,
    sizes: row.sizes,
    images: row.images,
    story: row.story,
    construction: row.construction,
    care: row.care,
    featured: row.featured,
  };
}

/**
 * Fetches the catalog from Supabase, falling back to the local data when
 * Supabase is not configured or unreachable. Wrapped in React cache() so a
 * single render pass hits the database once.
 */
export const getProducts = cache(async (): Promise<Product[]> => {
  const supabase = getSupabase();
  if (!supabase) return localProducts;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("code", { ascending: true });

  if (error) {
    console.error("[products] Supabase query failed, using local catalog:", error.message);
    return localProducts;
  }
  if (!data || data.length === 0) {
    console.warn("[products] Supabase returned no rows, using local catalog.");
    return localProducts;
  }
  return (data as ProductRow[]).map(mapRow);
});

export async function getProduct(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((product) => product.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((product) => product.featured);
}

export async function getRecommendations(
  slug: string,
  count = 3
): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((product) => product.slug !== slug).slice(0, count);
}
