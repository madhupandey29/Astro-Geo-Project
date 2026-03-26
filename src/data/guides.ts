export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const guides: Guide[] = [
  {
    slug: "how-to-choose-fabric-gsm",
    title: "How to Choose the Right GSM for Your Fabric",
    excerpt: "A practical guide to understanding GSM and selecting the right weight for apparel, uniforms, and home textiles.",
    category: "Fabric Knowledge",
    readTime: "4 min read",
    date: "January 10, 2024",
  },
  {
    slug: "cotton-vs-polyester",
    title: "Cotton vs. Polyester: Which Fabric is Right for You?",
    excerpt: "A detailed comparison of cotton and polyester fabrics for B2B buyers — covering durability, cost, and sustainability.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "February 1, 2024",
  },
  {
    slug: "bulk-fabric-ordering-guide",
    title: "The Complete Guide to Bulk Fabric Ordering",
    excerpt: "Everything you need to know about MOQ, lead times, sampling, and logistics when ordering fabric in bulk.",
    category: "Procurement",
    readTime: "6 min read",
    date: "March 5, 2024",
  },
];
