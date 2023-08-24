import { z } from "zod";

export const moviesSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).nonempty(),
    description: z.string().nullish(),
    duration: z.number().positive().int(),
    price: z.number().positive().int()
});

export const moviesCreateSchema = moviesSchema.omit({ id: true})
export const moviesUpDateSchema = moviesCreateSchema.partial()
