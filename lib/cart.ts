import { WHATSAPP_NUMBER } from "@/lib/site";

export type CartItem = {
  slug: string;
  code: string;
  name: string;
  colorway: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

export function cartCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.qty, 0);
}

export function cartSubtotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
}

export function buildWhatsAppOrderUrl(items: CartItem[]): string {
  const lines = items.map(
    (item) =>
      `${item.qty} x ${item.code} ${item.name} / ${item.colorway} / Size ${item.size} = $${item.price * item.qty}`
  );

  const message = [
    "Hello UNLEAVENED Co., I would like to order:",
    "",
    ...lines,
    "",
    `Total: $${cartSubtotal(items)}.00 USD`,
    "",
    "Name:",
    "Delivery address:",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
