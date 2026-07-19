import { cache } from "react";
import { getSupabase } from "@/lib/supabase";
import { articles as localArticles, type Article } from "@/lib/journal";

type ArticleRow = {
  slug: string;
  title: string;
  category: Article["category"];
  date: string;
  excerpt: string;
  cover: Article["cover"];
  body: string[];
};

function mapRow(row: ArticleRow): Article {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    date: row.date,
    excerpt: row.excerpt,
    cover: row.cover,
    body: row.body,
  };
}

/**
 * Fetches journal articles from Supabase (newest first), falling back to the
 * local data when Supabase is not configured or unreachable. Wrapped in
 * React cache() so a single render pass hits the database once.
 */
export const getArticles = cache(async (): Promise<Article[]> => {
  const supabase = getSupabase();
  if (!supabase) return localArticles;

  const { data, error } = await supabase
    .from("articles")
    .select("slug,title,category,date,excerpt,cover,body")
    .order("date", { ascending: false });

  if (error) {
    console.error("[articles] Supabase query failed, using local journal:", error.message);
    return localArticles;
  }
  if (!data || data.length === 0) {
    console.warn("[articles] Supabase returned no rows, using local journal.");
    return localArticles;
  }
  return (data as ArticleRow[]).map(mapRow);
});

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const all = await getArticles();
  return all.find((article) => article.slug === slug);
}
