import { z } from 'zod';

export const MediaSchema = z.object({
  id: z.string().length(26),
  mimeType: z.string().max(100),
  filePath: z.string().max(255),
  fileSize: z.bigint(),
  name: z.string().max(255),
  description: z.string().nullable().optional(),
  createdBy: z.string().length(26),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable().optional(),
  status: z.string().max(20).default("default"),
});

export type Media = z.infer<typeof MediaSchema>;

export const CreateMediaSchema = MediaSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const UpdateMediaSchema = MediaSchema.partial().omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const MediaFilterSchema = z.object({
  mimeType: z.string().optional(),
  status: z.string().optional(),
  createdBy: z.string().optional(),
  name: z.string().optional(),
});
