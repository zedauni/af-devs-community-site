import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().length(26),
  name: z.string().max(100),
  lastName: z.string().max(100).nullable().optional(),
  username: z.string().max(100),
  password: z.string().max(255),
  email: z.string().max(255).email(),
  locale: z.string().max(10).nullable().optional(),
  locked: z.boolean().default(false),
  validated: z.boolean().default(false),
  lastLogin: z.date().nullable().optional(),
  confirmationKey: z.string().max(255).nullable().optional(),
  passwordResetToken: z.string().max(255).nullable().optional(),
  passwordResetTokenExpiresAt: z.date().nullable().optional(),
  passwordResetTokenEmailsSent: z.number().int().default(0),
  privateKey: z.string().max(255).nullable().optional(),
  apiKey: z.string().max(255).nullable().optional(),
  avatar: z.string().length(26).nullable().optional(),
  birthday: z.date().nullable().optional(),
  bio: z.string().nullable().optional(),
  newsletter: z.boolean().default(false),
  gender: z.string().max(10).nullable().optional(),
  phone: z.string().max(20).nullable().optional(),
  mainUrl: z.string().max(255).nullable().optional(),
  externalId: z.string().max(255).nullable().optional(),
  corporation: z.string().max(255).nullable().optional(),
  note: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable().optional(),
  status: z.string().max(20).default("default"),
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  lastLogin: true,
});

export const UserFilterSchema = z.object({
  status: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  validated: z.boolean().optional(),
  locked: z.boolean().optional(),
});