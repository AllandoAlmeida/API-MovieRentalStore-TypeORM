import { z } from "zod";

export const moviesSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).nonempty(),
    description: z.string().nullish(),
    duration: z.number().positive(),
    price: z.number().int().positive(),
});

export const moviesCreateSchema = moviesSchema.omit({ id: true})
export const moviesUpDateSchema = moviesCreateSchema.partial()
