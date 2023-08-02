export const contentCategorySlugs = [
  "contributed-content",
  "curated-content",
] as const;
export type ContentCategorySlug = (typeof contentCategorySlugs)[number];
export interface Props {
  title: string;
  slug: ContentCategorySlug;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Contributed Content",
    slug: "contributed-content",
  },
  {
    title: "Curated Content",
    slug: "curated-content",
  },
];
