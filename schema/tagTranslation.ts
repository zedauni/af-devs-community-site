import { z } from "zod";

export const TagTranslationSchema = z.object({
  id: z.string().length(26),
  tagId: z.string().length(26),
  imageId: z.string().length(26).nullable().optional(),
  status: z.string().max(20).default("draft"),
  title: z.string().max(255),
  slug: z.string().max(255),
  description: z.string().nullable().optional(),
  descriptionRendered: z.string().nullable().optional(),
  locale: z.string().max(10),
  createdBy: z.string().length(26),
  updatedBy: z.string().length(26).nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable().optional(),
});

export type TagTranslation = z.infer<typeof TagTranslationSchema>;

export const CreateTagTranslationSchema = TagTranslationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
