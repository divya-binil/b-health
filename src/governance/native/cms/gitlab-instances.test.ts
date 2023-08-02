// import { describe, expect, it } from "vitest";
// import type { z } from "zod";
// import { Gitlab } from "@gitbeaker/node"; // All Resources
// import { glInstanceDefns } from "./gitlab-instances";
// //import { blogPrimeSchema } from "../../information-model/schemas";

// describe("GitLab API", () => {
//   if (process.env.CI) {
//     it("is CI/CD environment", async () => {
//       expect(process.env.CI).toBeDefined();
//     });
//     return;
//   }

//   type BlogPostFrontmatter = z.infer<typeof blogPrimeSchema>;

//   const surfaceAsBlogPostLabel = "📤 Surface NKC Blog Post";
//   const gnioInstance = glInstanceDefns["git.netspective.io"];
//   const gnioToken = gnioInstance.token();
//   expect(gnioToken).toBeDefined();

//   const glAPI = new Gitlab({
//     host: gnioInstance.host.toString(),
//     token: gnioToken!,
//   });

//   it("git.netspective.io labels", async () => {
//     const labels = await glAPI.Labels.all(1105);
//     const found = labels.find((l) => l.name == surfaceAsBlogPostLabel);
//     expect(found).toBeDefined();
//   });

//   it("git.netspective.io issues by label", async () => {
//     const issues = await glAPI.Issues.all({ labels: [surfaceAsBlogPostLabel] });
//     expect(issues.length).toBeGreaterThanOrEqual(1);
//     const first = issues[0];
//     const post: BlogPostFrontmatter = {
//       title: first?.title,
//       author: "shahid-shah",
//       category: "unknown",
//       excerpt: first?.title,
//       tags: [],
//       publishDate: new Date().toDateString(),
//       draft: false,
//       isGitLabIssue: {
//         instanceID: gnioInstance.identity,
//         projectID: first?.project_id,
//         projectIssueNum: first?.iid,
//       },
//       tags: [],
//     };
//     expect(blogPrimeSchema.parse(post)).toBeDefined();
//   });
// });
