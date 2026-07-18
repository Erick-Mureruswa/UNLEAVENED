import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/product-service";
import { articles } from "@/lib/journal";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const staticRoutes = [
    "",
    "/collection",
    "/journal",
    "/about",
    "/studio",
    "/archive",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/collection/${product.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
