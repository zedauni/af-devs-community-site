import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string().length(26),
  kind: z.string().max(50).default("article"),
  parentId: z.string().length(26).nullable().optional(),
  createdBy: z.string().length(26),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable().optional(),
});

export type Post = z.infer<typeof PostSchema>;

export const CreatePostSchema = PostSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const UpdatePostSchema = PostSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const PostFilterSchema = z.object({
  kind: z.string().optional(),
  parentId: z.string().optional(),
  createdBy: z.string().optional(),
});
