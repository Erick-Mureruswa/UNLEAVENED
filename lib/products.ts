export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
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
  featured?: boolean;
};

export const products: Product[] = [
  {
    code: "UC-001",
    slug: "uc-001-heavyweight-tee-bone",
    name: "Heavyweight Tee",
    colorway: "Bone",
    fit: "Boxy. Dropped shoulder.",
    fabric: "100% Combed Cotton",
    weight: "300 GSM",
    finish: "Garment Washed",
    price: 70,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      {
        src: "/images/products/uc-001-bone-front.png",
        alt: "UC-001 Heavyweight Tee in Bone, hung against cast concrete architecture",
      },
    ],
    story:
      "The foundation stone. A tee built to disappear into your wardrobe and remain there for years: heavyweight cotton, a silhouette that improves through wear, and no branding beyond the neck. Nothing added. Nothing exaggerated.",
    construction: [
      "Cover-stitched collar and hem",
      "Wide ribbed collar",
      "Side-seamed body",
      "Neck print only, no chest logo",
      "Small woven hem tag",
    ],
    care: [
      "Machine wash cold, inside out",
      "Hang dry in shade",
      "Do not bleach",
      "Warm iron on reverse if needed",
    ],
    featured: true,
  },
  {
    code: "UC-002",
    slug: "uc-002-doorway-tee-olive-moss",
    name: "Doorway Tee",
    colorway: "Olive Moss",
    fit: "Boxy. Dropped shoulder.",
    fabric: "100% Combed Cotton",
    weight: "300 GSM",
    finish: "Stone Wash Texture",
    price: 85,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      {
        src: "/images/products/uc-002-olive-doorway.png",
        alt: "UC-002 Doorway Tee in Olive Moss with architectural doorway back print",
      },
    ],
    story:
      "The doorway is our only symbol: an unbroken threshold, drawn in blueprint. It stands for choosing integrity over imitation. Printed tonal on stone-washed olive, framed by the values it was built on: craftsmanship, discipline, longevity, quiet confidence.",
    construction: [
      "Water-based back print in Bone ink",
      "Architectural blueprint artwork",
      "Cover-stitched collar and hem",
      "Stone-washed for depth of tone",
      "Neck label only",
    ],
    care: [
      "Machine wash cold, inside out",
      "Hang dry in shade",
      "Do not tumble dry",
      "Do not iron directly on print",
    ],
    featured: true,
  },
  {
    code: "UC-003",
    slug: "uc-003-doorway-tee-black",
    name: "Doorway Tee",
    colorway: "Jet Black",
    fit: "Boxy. Dropped shoulder.",
    fabric: "100% Combed Cotton",
    weight: "300 GSM",
    finish: "Garment Washed",
    price: 85,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      {
        src: "/images/products/uc-003-black-doorway.png",
        alt: "UC-003 Doorway Tee in Jet Black with monochrome doorway front print",
      },
    ],
    story:
      "The threshold rendered in its purest contrast: Bone ink on Jet Black. A stone-textured doorway framed by interlocked monograms, carrying the manifesto in full: authenticity cannot be manufactured. Remain unaltered.",
    construction: [
      "Front print in Bone ink with stone texture",
      "Manifesto typeset in grotesk and mono",
      "Cover-stitched collar and hem",
      "Garment washed for a soft, broken-in hand",
      "Woven hem tag",
    ],
    care: [
      "Machine wash cold, inside out",
      "Hang dry in shade",
      "Do not tumble dry",
      "Do not iron directly on print",
    ],
  },
  {
    code: "UC-004",
    slug: "uc-004-doorway-tee-charcoal",
    name: "Doorway Tee",
    colorway: "Charcoal",
    fit: "Boxy. Dropped shoulder.",
    fabric: "Heavyweight Cotton Fleece",
    weight: "300 GSM",
    finish: "Stonewashed",
    price: 85,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      {
        src: "/images/products/uc-004-charcoal-doorway.png",
        alt: "UC-004 Doorway Tee in Charcoal with illustrated ruin doorway back print",
      },
    ],
    story:
      "A doorway standing inside a structure still being built. Illustrated in muted stone and burnished copper, the rare accent used sparingly. What endures is never accidental.",
    construction: [
      "Back print with burnished copper accents",
      "Illustrated architectural artwork",
      "Premium ribbing at collar and cuff",
      "Stonewashed texture",
      "Tonal sleeve embroidery",
    ],
    care: [
      "Machine wash cold, inside out",
      "Hang dry in shade",
      "Do not tumble dry",
      "Do not iron directly on print",
    ],
  },
  {
    code: "UC-005",
    slug: "uc-005-illustrated-tee-black",
    name: "Illustrated Tee",
    colorway: "Jet Black",
    fit: "Oversize. Dropped shoulder.",
    fabric: "100% Combed Cotton",
    weight: "300 GSM",
    finish: "Garment Washed",
    price: 95,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      {
        src: "/images/products/uc-005-black-illustrated.png",
        alt: "UC-005 Illustrated Tee in Jet Black with muted anime-style back illustration",
      },
      {
        src: "/images/products/uc-005-black-illustrated-alt.png",
        alt: "UC-005 Illustrated Tee in Jet Black, alternate view with stencil doorway details",
      },
    ],
    story:
      "A figure standing firm inside an unfinished structure, drawn in a muted palette and printed heavy on black. The loudest piece we make, and it still refuses to shout.",
    construction: [
      "Full back illustration, muted palette",
      "Water-based inks, soft hand feel",
      "Cover-stitched collar and hem",
      "Oversize blocked silhouette",
      "Woven hem tag",
    ],
    care: [
      "Machine wash cold, inside out",
      "Hang dry in shade",
      "Do not tumble dry",
      "Do not iron directly on print",
    ],
    featured: true,
  },
  {
    code: "UC-006",
    slug: "uc-006-illustrated-tee-charcoal",
    name: "Illustrated Tee",
    colorway: "Charcoal",
    fit: "Oversize. Dropped shoulder.",
    fabric: "Heavyweight Cotton Fleece",
    weight: "300 GSM",
    finish: "Garment Dyed",
    price: 95,
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      {
        src: "/images/products/uc-006-charcoal-illustrated.png",
        alt: "UC-006 Illustrated Tee in Charcoal with muted anime-style back illustration",
      },
    ],
    story:
      "The same figure, the same threshold, washed in charcoal. Garment dyed so no two pieces age identically. Designed to become part of your life rather than the center of it.",
    construction: [
      "Full back illustration, muted palette",
      "Garment dyed after construction",
      "Premium ribbing at collar and cuff",
      "Heavyweight fleece hand",
      "Doorway hem tag",
    ],
    care: [
      "Machine wash cold, inside out",
      "Hang dry in shade",
      "Expect gentle tonal ageing",
      "Do not iron directly on print",
    ],
  },
];

export function formatPrice(price: number): string {
  return `$${price}.00 USD`;
}
