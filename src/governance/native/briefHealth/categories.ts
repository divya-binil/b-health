export interface Props {
  readonly slug: string;
  readonly name: string;
  //readonly image: string;
}

export type categories = Props;

export const categories: Props[] = [
  {
    slug: "patient-experience",
    name: "Symplur patient experience",
  },
  {
    slug: "public-health",
    name: "Healthcare it news public health",
  },
  {
    slug: "interoperability",
    name: "Himss interoperability",
  },
  {
    slug: "patient-portals",
    name: "Klas patient portals",
  },
  {
    slug: "oncology",
    name: "Healthcare it news oncology",
  },
  {
    slug: "hipaa",
    name: "Hipaa",
  },
];

