import { z } from "zod";

export const Form = z.object({
  username: z.string(),
});