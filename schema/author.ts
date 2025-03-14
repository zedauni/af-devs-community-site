import { z } from "zod";

export const AuthorSchema = z.object({
  name: z.string().min(2, "Le nom de l'auteur doit contenir au moins 2 caractères"),
  imageUrl: z.string().url("L'URL de l'image de l'auteur doit être valide"),
})

export type Author = z.infer<typeof AuthorSchema>