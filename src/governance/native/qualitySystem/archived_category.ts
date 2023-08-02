/* Not using now -  native->category.ts file is using*/
export const qualitySystemCategorySlugs = ["unknown", "code-quality","soc2-certification","nup-netspective-up","fda","nqs-netspective-quality-system"] as const;
export type qualitysystemCategorySlug = typeof qualitySystemCategorySlugs[number];
export interface Props {
  title: string;
  slug: qualitysystemCategorySlug;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;
export const unknownCategory: Category = {
  title: "unknown",
  slug: "unknown",
  color: "pink",
  description:
    "When a category is not found",
};

export const categories: Props[] = [
  
  {
    title: "Code Quality",
    slug: "code-quality",
    color: "green",
    description:
      "Code Quality",
  },
  {
    title: "SOC2 Certification",
    slug: "soc2-certification",
    color: "green",
    description:
      "SOC2 Certification",
  },
  {
    title: "NUP Netspective Unified Process",
    slug: "nup-netspective-up",
    color: "green",
    description:
      "NUP Netspective Unified Process",
  },
  {
    title: "NQS Netspective Quality System",
    slug: "nqs-netspective-quality-system",
    color: "green",
    description:
      "NQS Netspective Quality System",
  },
  {
    title: "FDA",
    slug: "fda",
    color: "green",
    description:
      "FDA",
  },
  unknownCategory,
];