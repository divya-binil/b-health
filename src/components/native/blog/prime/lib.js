import { getCollection } from "astro:content";

// Only return posts without `draft: true` in the frontmatter

// export const latestPosts = (
//   await getCollection("blog-prime", ({ data }) => {
//     return data.draft !== true;
//   })
// ).sort(
//   (a, b) =>
//     new Date(b.data.publishDate).valueOf() -
//     new Date(a.data.publishDate).valueOf()
// );

/** Format Date */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

/** Check if an Image Path is Relative or Absolute */
export const checkImageUrl = (image, url) => {
  try {
    new URL(image);
    return image;
  } catch (error) {
    return new URL(image, url).toString();
  }
};
