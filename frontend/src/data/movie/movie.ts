import { z } from "zod";

export const movieSchema = z.object({
    plot: z.string(),
    title: z.string(),
    cast: z.string().array(),
    genres: z.string().array(),
    languages: z.string().array(),
    rated: z.string(),
    released: z.date(),
    imdb: z.object({
        id: z.number(),
        votes: z.number(),
        rating: z.number()
    }),
    countries: z.string().array(),
    // tomatoes: z.object({
    //     viewer: z.object({
    //         rating: z.number(),
    //         numReviews: z.number(),
    //         meter: z.number()
    //     }),
    //     lastupdated: z.date()
    // })
});

export type Movie = z.infer<typeof movieSchema>;