import { Movie } from "./Movie";

export interface MovieRequest {
    plot: string;
    title: string;
    cast: string[];
    genres: string[];
    languages: string[];
    countries: string[];
    rated: string[];
    releasedAfter: Date;
    releasedBefore: Date;
    next: Movie;
    pageSize: number;
}