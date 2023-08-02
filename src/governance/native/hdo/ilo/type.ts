export const hdoIloTypeSlugs = ["page", "HDO-ILO"] as const;
export type HdoIloTypeSlug = (typeof hdoIloTypeSlugs)[number];
export interface Props {
  title: string;
  slug: HdoIloTypeSlug;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Page",
    slug: "page",
  },
  {
    title: "HDO ILO",
    slug: "HDO-ILO",
  },
];
