export const qualitysystemOrganizationsSlugs = ["netspective-communication-llc"] as const;
export type qualitysystemOrganizationSlug = typeof qualitysystemOrganizationsSlugs[number];

export interface Props {
  readonly name: string;
  readonly slug: qualitysystemOrganizationSlug;
}

export type Organization = Props;

export const organizations: Props[] = [
  {
    name: "Netspective Communication LLC",
    slug: "netspective-communication-llc",
  },
  
];