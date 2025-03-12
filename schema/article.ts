import { z } from "zod";
import { AuthorSchema } from './author';
import { TagSchema } from './tag';

export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  href: z.string().url("L'URL doit être valide"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  imageUrl: z.string().url("L'URL de l'image doit être valide"),
  date: z.string().min(10, "La date doit contenir au moins 10 caractères"),
  // datetime: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Le format de la date doit être YYYY-MM-DD"),
  datetime: z.string().regex(z.datetimeRegex({}), "Le format de la date doit être YYYY-MM-DD"),
  tags: z.array(TagSchema).nonempty("Au moins un tag est requis"),
  readingTime: z.string().regex(/^\d+ min$/, "Le temps de lecture doit être au format 'X min'"),
  author: AuthorSchema,
})

export type Article = z.infer<typeof ArticleSchema>