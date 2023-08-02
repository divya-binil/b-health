import { z } from "zod";

export const briefHealthSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string().optional(),
  aliases: z.string(),
  breadcrumbs: z.array(z.string()),
  breadcrumbLinks: z.array(z.string()),
  categories: z.array(z.string()).optional().nullable(),
  featuredImage: z
    .object({
      alt: z.string().optional(),
      format: z.string().optional(),
      href: z.string().optional(),
      //size: z.number().optional(),
      //valid: z.boolean().optional(),
      workPackage: z.number().optional(),
      wpAttachment: z
        .object({
          fileName: z.string().optional(),
          link: z.string().optional(),
        })
        .optional(),
    })
    .optional()
    .nullable(),
});


