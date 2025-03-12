import { z } from "zod";

export const TagSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
})

export type Tag = z.infer<typeof TagSchema>