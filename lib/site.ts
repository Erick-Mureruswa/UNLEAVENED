export const SITE_URL = "https://unleavened.co";
export const SITE_NAME = "UNLEAVENED Co.";
export const SITE_TAGLINE = "Remain Unaltered.";

export const NAV_LEFT = [
  { label: "Stories", href: "/about" },
  { label: "Journal", href: "/journal" },
] as const;

export const NAV_RIGHT = [
  { label: "Collection", href: "/collection" },
  { label: "Archive", href: "/archive" },
  { label: "Studio", href: "/studio" },
  { label: "Login", href: "/login" },
] as const;

export const CONTACT_EMAIL = "studio@unleavened.co";

/**
 * WhatsApp number for order checkout, in international format without "+"
 * or spaces. Override via NEXT_PUBLIC_WHATSAPP_NUMBER; the default is a
 * placeholder that must be replaced before launch.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "263770000000";
