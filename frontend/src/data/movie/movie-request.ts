import { z } from "zod";
import { movieSchema } from "./movie";

export const movieRequestSchema = z.object({
    plot: z.string(),
    title: z.string(),
    cast: z.string().array(),
    genres: z.string().array(),
    languages: z.string().array(),
    countries: z.string().array(),
    rated: z.string(),
    releasedAfter: z.date(),
    releasedBefore: z.date(),
    next: movieSchema,
    pageSize: z.number().int().positive()
});

export type MovieRequest = z.infer<typeof movieRequestSchema>;