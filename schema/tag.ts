import { z } from "zod";

// export const TagSchema = z.object({
//   title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
// })


export const TagSchema = z.object({
  id: z.string().length(26),
  parentId: z.string().length(26).nullable().optional(),
  kind: z.string().max(20).default("tag"),
  createdBy: z.string().length(26),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable().optional(),
});

export type Tag = z.infer<typeof TagSchema>;

export const CreateTagSchema = TagSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const UpdateTagSchema = TagSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const TagFilterSchema = z.object({
  kind: z.string().optional(),
  parentId: z.string().optional(),
  createdBy: z.string().optional(),
});
