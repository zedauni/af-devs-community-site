import { z } from "zod";

export const PostTranslationSchema = z.object({
  id: z.string().length(26),
  postId: z.string().length(26),
  imageId: z.string().length(26).nullable().optional(),
  status: z.string().max(20).default("draft"),
  publishedAt: z.date().nullable().optional(),
  title: z.string().max(255),
  surTitle: z.string().max(255).nullable().optional(),
  subTitle: z.string().max(255).nullable().optional(),
  postScriptum: z.string().max(1000).nullable().optional(),
  slug: z.string().max(255),
  excerpt: z.string().nullable().optional(),
  excerptRendered: z.string().nullable().optional(),
  content: z.string(),
  contentRendered: z.string(),
  locale: z.string().max(10),
  idealSearchTerm: z.string().max(255).nullable().optional(),
  canonicalUrl: z.string().max(255).nullable().optional(),
  createdBy: z.string().length(26),
  updatedBy: z.string().length(26).nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable().optional(),
});

export type PostTranslation = z.infer<typeof PostTranslationSchema>;

export const UpdatePostTranslationSchema = PostTranslationSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
