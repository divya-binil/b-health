/* Not using now -  native->category.ts file is using*/
export const blogPrimeCategorySlugs = [
  "unknown",
  "resFactory-migration",
  "guidance-governance",
  "upi-functionality",
  "technology-stack",
  "layout-infrastructure",
  "activity-log",
  "guest-post-contributions",
  "outreach-campaign-analytics",
  "digital-marketing",
  "newsletter-blog-post",
  "devsecops-infrastructure",
  "editorial-calendar-original-article",
  "prompt-engineering",
  "newsletter-publishing",
  "defensive-publication-platform",
  "guest-posting-strategy",
  "customer-engagement-and-partnership-announcements",
  "keyword-analysis",
  "content-marketing-strategy",
  "innovation-showcase",
  "events-intelligence-module",
] as const;
export type BlogPrimeCategorySlug = (typeof blogPrimeCategorySlugs)[number];
export interface Props {
  title: string;
  slug: BlogPrimeCategorySlug;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;
export const unknownCategory: Category = {
  title: "unknown",
  slug: "unknown",
  color: "pink",
  description: "When a category is not found",
};

export const categories: Props[] = [
  {
    title: "resFactory Migration",
    slug: "resFactory-migration",
    color: "blue",
    description:
      "Keep up with the latest resFactory to Astro Netspective Unified Publishing Infrastructure (UPI) migration",
  },
  {
    title: "Governance Guidance",
    slug: "guidance-governance",
    color: "green",
    description: "Learn about governance requirements for content and code",
  },
  {
    title: "UPI Functionality",
    slug: "upi-functionality",
    color: "purple",
    description: "Keep up with the latest UPI functionality",
  },
  {
    title: "Technology Stack",
    slug: "technology-stack",
    color: "blue",
    description: "Keep up with the latest tech stack news",
  },
  {
    title: "Design System / Layout Infrastructure",
    slug: "layout-infrastructure",
    color: "pink",
    description:
      "Stay up to date on design system and layout infrastructure topics",
  },
  {
    title: "Activity Log",
    slug: "activity-log",
    color: "green",
    description: "Activity log of the projects",
  },
  {
    title: "Guest Post Contributions",
    slug: "guest-post-contributions",
    color: "blue",
    description: "Guest post contributions to Medigy",
  },
  {
    title: "Outreach Campaign Analytics",
    slug: "outreach-campaign-analytics",
    color: "blue",
    description: "Outreach Campaign Analytics",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    color: "blue",
    description: "Digital Marketing",
  },
  {
    title: "Newsletter Blog Post",
    slug: "newsletter-blog-post",
    color: "blue",
    description: "newsletter-blog-post",
  },
  {
    title: "Dev Sec Ops Infrastructure Blog Post",
    slug: "devsecops-infrastructure",
    color: "blue",
    description: "Dev Sec Ops Infrastructure Blog Post",
  },
  {
    title: "Editorial Calendar Original Article",
    slug: "editorial-calendar-original-article",
    color: "blue",
    description: "Editorial Calendar Original Article",
  },
  {
    title: "Prompt Engineering",
    slug: "prompt-engineering",
    color: "blue",
    description: "Prompt Engineering",
  },
  {
    title: "Newsletter Publishing",
    slug: "newsletter-publishing",
    color: "blue",
    description: "Newsletter Publishing",
  },
  {
    title: "Defensive Publication Platform",
    slug: "defensive-publication-platform",
    color: "blue",
    description: "Defensive Publication Platform",
  },
  {
    title: "Guest Posting Strategy",
    slug: "guest-posting-strategy",
    color: "blue",
    description: "Guest Posting Strategy",
  },
  {
    title: "Customer Engagement and Partnership Announcements",
    slug: "customer-engagement-and-partnership-announcements",
    color: "blue",
    description: "Customer Engagement and Partnership Announcements",
  },
  {
    title: "Keyword Analysis",
    slug: "keyword-analysis",
    color: "blue",
    description: "Keyword Analysis",
  },
  {
    title: "Content Marketing Strategy",
    slug: "content-marketing-strategy",
    color: "blue",
    description: "Content Marketing Strategy",
  },
  {
    title: "Innovation Showcase",
    slug: "innovation-showcase",
    color: "blue",
    description: "Innovation Showcase",
  },
  {
    title: "Events Intelligence Module",
    slug: "events-intelligence-module",
    color: "blue",
    description: "Events Intelligence Module",
  },
  unknownCategory,
];
