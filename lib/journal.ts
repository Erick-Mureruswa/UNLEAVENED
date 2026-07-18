export type Article = {
  slug: string;
  title: string;
  category:
    | "Stories"
    | "Materials"
    | "Architecture"
    | "Philosophy"
    | "People"
    | "Craftsmanship";
  date: string;
  excerpt: string;
  cover: { src: string; alt: string };
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "the-doorway",
    title: "The Doorway",
    category: "Philosophy",
    date: "2026-05-14",
    excerpt:
      "Why an unbroken threshold became the only symbol we allow ourselves.",
    cover: {
      src: "/images/products/uc-002-olive-doorway.png",
      alt: "Architectural doorway artwork printed tonal on olive cotton",
    },
    body: [
      "Every brand reaches the moment where it must choose a symbol. Most choose noise: a mascot, a flourish, something that performs. We chose a doorway.",
      "A doorway is the quietest structure in architecture. It holds weight without announcing it. It exists so that something else can pass through. Drawn as an unbroken rectangle, it became our foundation stone: the decision to choose integrity over imitation, made once, then made again every day.",
      "You will find it blind-embossed on our packaging, stitched at the hem of a tee, stencilled in blueprint on the back of UC-002. Never larger than it needs to be. The doorway does not ask to be seen. It asks to be passed through, and to still be standing when you look back.",
    ],
  },
  {
    slug: "weight-as-intention",
    title: "300 GSM: Weight as Intention",
    category: "Materials",
    date: "2026-04-02",
    excerpt:
      "Heavyweight fabric is not a trend decision. It is a durability decision.",
    cover: {
      src: "/images/products/uc-001-bone-front.png",
      alt: "Bone heavyweight tee hung against cast concrete",
    },
    body: [
      "Grams per square metre is the most honest number in clothing. It cannot be styled, filtered, or marketed. Fabric either has weight or it does not.",
      "We build our tees at 300 GSM from combed cotton: heavy enough to hold a silhouette, dense enough to survive years of washing, soft enough after garment washing to feel already lived-in. The weight is the point. A garment with substance behaves differently: it drapes instead of clings, structures instead of sags.",
      "Lighter fabric is cheaper. It photographs the same. For one season, it even feels the same. We are not designing for one season.",
    ],
  },
  {
    slug: "concrete-and-cloth",
    title: "Concrete and Cloth",
    category: "Architecture",
    date: "2026-03-11",
    excerpt:
      "What brutalist architecture taught us about designing garments that endure.",
    cover: {
      src: "/images/products/uc-004-charcoal-doorway.png",
      alt: "Charcoal tee with illustrated doorway against textured concrete wall",
    },
    body: [
      "The buildings we photograph our garments against were poured decades ago. They have no ornament to date them, no trend to betray them. They are simply structure, material, and light. And they remain.",
      "This is the discipline we borrow. A garment, like a building, should be honest about its construction: visible cover-stitching instead of hidden shortcuts, ribbing that holds instead of decoration that distracts, proportions that stand on their own.",
      "Concrete ages by gathering character. Good cotton does the same. Both reward the decision to build heavier than necessary.",
    ],
  },
  {
    slug: "remain-unaltered",
    title: "Remain Unaltered",
    category: "Stories",
    date: "2026-02-01",
    excerpt:
      "The founding note: on unleavened bread, dilution, and refusing both.",
    cover: {
      src: "/images/products/uc-003-black-doorway.png",
      alt: "Jet black tee with bone doorway print against concrete",
    },
    body: [
      "UNLEAVENED Co. began with a simple frustration: too much fashion was asking people to become someone else. Every season introduced a new identity to chase.",
      "The name comes from unleavened bread: pure, unchanged, uncompromised under pressure. No additive to make it appear larger than it is. That restraint felt like the only honest position left in clothing.",
      "So we make uniforms for intentional living. Heavyweight essentials with nothing added and nothing exaggerated, designed to disappear into your wardrobe and remain there for years. The world rewards imitation. Character rewards consistency. Remain unaltered.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
