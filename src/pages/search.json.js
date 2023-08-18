import { getCollection } from "astro:content";
async function getPosts() {
 const posts = (await getCollection("brief-health"));
 return posts.map((post) => ({
    slug: post.slug,
    description: post.data.description,
    title: post.data.title,
    date:post.data.date,
    aliases:post.data.aliases,
    categories:post.data.categories,
    featuredImage:post.data.featuredImage
 }));
}
export async function get({}) {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
