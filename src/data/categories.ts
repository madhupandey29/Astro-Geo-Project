export interface Category {
  slug: string;
  name: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
}

export const categories: Category[] = [
  {
    slug: "woven-fabrics",
    name: "Woven Fabrics",
    description: "Premium woven fabrics for apparel, uniforms, and home textiles.",
    heroTitle: "Woven Fabrics — Precision Crafted for Every Application.",
    heroSubtitle: "Explore our range of high-quality woven fabrics including cotton twill, poplin, and more.",
  },
  {
    slug: "cotton-fabric",
    name: "Cotton Fabrics",
    description: "100% cotton fabrics in a wide range of weights and weaves.",
    heroTitle: "Premium Cotton Fabrics for Global Buyers.",
    heroSubtitle: "Breathable, durable, and available in bulk — our cotton range covers every need.",
  },
  {
    slug: "denim-fabric",
    name: "Denim Fabrics",
    description: "Classic and stretch denim fabrics for fashion and workwear.",
    heroTitle: "Denim Fabrics Built for Modern Fashion.",
    heroSubtitle: "From classic indigo to stretch blends — denim for every collection.",
  },
  {
    slug: "knit-fabric",
    name: "Knit Fabrics",
    description: "Soft and stretchy knit fabrics for activewear and casual apparel.",
    heroTitle: "Knit Fabrics for Comfort-First Designs.",
    heroSubtitle: "Jersey, interlock, and rib knits available in bulk for B2B buyers.",
  },
];
