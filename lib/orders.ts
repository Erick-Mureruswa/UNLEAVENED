import { getSupabase } from "@/lib/supabase";
import { cartSubtotal, type CartItem } from "@/lib/cart";

/**
 * Records an order enquiry when the customer opens WhatsApp checkout, so the
 * studio keeps a trail even if the message is never sent. Fire-and-forget:
 * a failure is logged but never blocks the WhatsApp handoff.
 */
export async function recordOrderEnquiry(items: CartItem[]): Promise<void> {
  const supabase = getSupabase();
  if (!supabase || items.length === 0) return;

  const { error } = await supabase.from("order_enquiries").insert({
    items: items.map(({ slug, code, name, colorway, size, price, qty }) => ({
      slug,
      code,
      name,
      colorway,
      size,
      price,
      qty,
    })),
    subtotal: cartSubtotal(items),
  });

  if (error) {
    console.error("[orders] Failed to record enquiry:", error.message);
  }
}
