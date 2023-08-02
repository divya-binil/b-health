/* Not using now -  native->category.ts file is using*/
export const systemUpdatesSlugs = [
  "unknown",
  "gitlab-ce",
  "openproject-ce",
  "astro",
  "postgresql",
  "skype",
  "plantuml",
  "kroki",
  "keycloak",
  "node",
  "react",
  "hugo",
  "signoz",
] as const;
export type systemUpdatesSlug = (typeof systemUpdatesSlugs)[number];
export interface Props {
  title: string;
  slug: systemUpdatesSlug;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type SystemCategory = Props;
export const unknownCategory: SystemCategory = {
  title: "unknown",
  slug: "unknown",
  color: "pink",
  description: "When a tool is not found",
};

export const systemcategories: Props[] = [
  {
    title: "GitLab EE",
    slug: "gitlab-ce",
    color: "green",
    description: "GitLab EE",
  },
  {
    title: "OpenProject CE",
    slug: "openproject-ce",
    color: "green",
    description: "OpenProject CE",
  },
  {
    title: "Astro",
    slug: "astro",
    color: "green",
    description: "Astro Upgrade",
  },
  {
    title: "PostgreSQL",
    slug: "postgresql",
    color: "green",
    description: "PostgreSQL",
  },
  {
    title: "Skype",
    slug: "skype",
    color: "green",
    description: "Skype",
  },
  {
    title: "PlantUML",
    slug: "plantuml",
    color: "green",
    description: "PlantUML",
  },
  {
    title: "Kroki",
    slug: "kroki",
    color: "green",
    description: "Kroki",
  },
  {
    title: "Keycloak",
    slug: "keycloak",
    color: "green",
    description: "Keycloak",
  },
  {
    title: "Node",
    slug: "node",
    color: "green",
    description: "Node",
  },
  {
    title: "React",
    slug: "react",
    color: "green",
    description: "React",
  },
  {
    title: "Hugo",
    slug: "hugo",
    color: "green",
    description: "Hugo",
  },
  {
    title: "SigNoz",
    slug: "signoz",
    color: "green",
    description: "SigNoz",
  },
  unknownCategory,
];
