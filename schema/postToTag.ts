import { z } from 'zod';

export const PostToTagSchema = z.object({
  id: z.string().length(26),
  postId: z.string().length(26),
  tagId: z.string().length(26),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PostToTag = z.infer<typeof PostToTagSchema>;

export const CreatePostToTagSchema = PostToTagSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
