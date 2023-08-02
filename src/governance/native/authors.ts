export const AuthorSlugs = [
  "unknown",
  "shahid-shah",
  "ajay-kumaran-nair",
  "jijo-mp",
  "geo-vl",
  "abdul-razak",
  "arun-kr",
  "ajay-kuruvath",
  "rinshad-ka",
  "prathitha-cb",
  "radhika-n",
  "sonalika-ghosh",
  "subhash-chandrabose",
  "happy-kumari",
  "jubin-mytheen",
  "resul-raveendran",
  "niba-nazar",
  "nidhin-unni",
  "ashna-sabu",
  "shaheen-iquebal",
  "mohd-sufyan",
  "wasiurrehman",
  "abdul-razak",
  "ajay-kuruvath",
  "vishakha-yadav",
] as const;
export type AuthorSlug = (typeof AuthorSlugs)[number];

export interface Props {
  readonly name: string;
  readonly slug: AuthorSlug;
  readonly image: string;
  readonly bio: string;
  readonly aliases?: {
    readonly identity: string;
    readonly provenance?:
      | "email"
      | "github.com"
      | "git.netspective.io"
      | "gl.infra.medigy.com";
  }[];
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Shahid N. Shah",
    slug: "shahid-shah",
    image: "./src/assets/native/blog/prime/authors/shahid-shah-headshot.webp",
    bio: "Shahid Shah is a Digital Health/LifeSci Serial Entrepreneur and CTO focused on Care Delivery Innovation Lifecycle Management",
    aliases: [
      { identity: "shahid@shah.org", provenance: "email" },
      { identity: "shahid_shah", provenance: "git.netspective.io" },
    ],
  },
  {
    name: "Ajay Kumaran Nair",
    slug: "ajay-kumaran-nair",
    image:
      "./src/assets/native/blog/prime/authors/ajay-kumaran-nair-headshot.jpeg",
    bio: "Ajay Kumaran Nair is a seasoned user experience specialist, highly skilled at creating easy-to-use, innovative and effective user interfaces",
  },
  {
    name: "Geo V L",
    slug: "geo-vl",
    image: "./src/assets/native/blog/prime/authors/geo-vl-headshot.jpg",
    bio: "Geo V L is Tech Lead / Developer",
  },
  {
    name: "Jijo M P",
    slug: "jijo-mp",
    image: "./src/assets/native/blog/prime/authors/jijo-mp-headshot.png",
    bio: "Jijo MP is a developer, eager to learn new tech things",
  },
  {
    name: "Abdul Razak",
    slug: "abdul-razak",
    image: "./src/assets/native/blog/prime/authors/abdul-razak-headshot.png",
    bio: "IT Professional",
  },
  {
    name: "Arun K R",
    slug: "arun-kr",
    image: "./src/assets/native/blog/prime/authors/arun-kr-headshot.png",
    bio: "Quality Lead",
  },
  {
    name: "Ajay Kuruvath",
    slug: "ajay-kuruvath",
    image: "./src/assets/native/blog/prime/authors/ajay-kuruvath-headshot.png",
    bio: "IT Professional",
  },
  {
    name: "Rinshad K. Asharaf",
    slug: "rinshad-ka",
    image: "./src/assets/native/blog/prime/authors/rinshad-ka-headshot.png",
    bio: "DevOps Engineer",
  },
  {
    name: "Prathitha C B",
    slug: "prathitha-cb",
    image: "./src/assets/native/blog/prime/authors/prathitha-cb-headshot.png",
    bio: "Quality Lead",
  },
  {
    name: "Radhika Narayanan",
    slug: "radhika-n",
    image: "./src/assets/native/blog/prime/authors/radhika-headshot.jpg",
    bio: "Medigy team member",
  },
  {
    name: "Sonalika Ghosh",
    slug: "sonalika-ghosh",
    image: "./src/assets/native/blog/prime/authors/sonalika-ghosh-headshot.png",
    bio: "Content Team member",
  },
  {
    name: "Subhash Chandrabose",
    slug: "subhash-chandrabose",
    image:
      "./src/assets/native/blog/prime/authors/subhash-chandrabose-headshot.jpg",
    bio: "SEO Lead",
  },
  {
    name: "Happy Kumari",
    slug: "happy-kumari",
    image: "./src/assets/native/blog/prime/authors/happy-kumari-headshot.jpg",
    bio: "Content Team Member",
  },
  {
    name: "Jubin Mytheen",
    slug: "jubin-mytheen",
    image: "./src/assets/native/blog/prime/authors/jubin-mytheen-headshot.jpg",
    bio: "Content Team Member",
  },
  {
    name: "Resul Raveendran",
    slug: "resul-raveendran",
    image:
      "./src/assets/native/blog/prime/authors/resul-raveendran-headshot.png",
    bio: "DevOps Engineer",
  },
  {
    name: "Niba Nazar",
    slug: "niba-nazar",
    image: "./src/assets/native/blog/prime/authors/niba-nazar-headshot.png",
    bio: "DevOps Engineer",
  },
  {
    name: "Nidhin Unni",
    slug: "nidhin-unni",
    image: "./src/assets/native/blog/prime/authors/nidhin-unni-headshot.jpeg",
    bio: "DevOps Engineer",
  },
  {
    name: "Ashna Sabu",
    slug: "ashna-sabu",
    image: "./src/assets/native/blog/prime/authors/ashna-sabu-headshot.jpg",
    bio: "DevOps Engineer",
  },
  {
    name: "Shaheen Iquebal",
    slug: "shaheen-iquebal",
    image:
      "./src/assets/native/blog/prime/authors/shaheen-iquebal-headshot.jpg",
    bio: "Content Team Member",
  },
  {
    name: "Mohd Sufyan",
    slug: "mohd-sufyan",
    image: "./src/assets/native/blog/prime/authors/mohd-sufyan-headshot.jpg",
    bio: "Content Team Member",
  },
  {
    name: "Wasiurrehman",
    slug: "wasiurrehman",
    image: "./src/assets/native/blog/prime/authors/wasiurrehman-headshot.jpg",
    bio: "Content Team Member",
  },
  {
    name: "Vishakha Yadav",
    slug: "vishakha-yadav",
    image: "./src/assets/native/blog/prime/authors/vishakha-yadav-headshot.png",
    bio: "Content Team Member",
  },
];
