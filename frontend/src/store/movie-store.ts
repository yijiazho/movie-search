import { createWithEqualityFn } from "zustand/traditional";
import { Movie } from "../data/movie/movie";
import { MovieRequest } from "../data/movie/movie-request";
import { getMovies } from "../service/movie-service";

interface MovieState {
    movies: Movie[];
    loading: boolean;
    error: boolean;
}

interface MovieAction {
    fetchMovies: (request: MovieRequest) => Promise<void>;
}

// Create the zustand store
export const useMovieStore = createWithEqualityFn<MovieState & MovieAction>(
    (set) => ({
        movies: [],
        loading: false,
        error: false,

        // Action to fetch movies and update the store
        fetchMovies: async (request: MovieRequest) => {
            set({ loading: true, error: false });
            try {
                const movies = await getMovies(request);
                set({ movies: movies, loading: false });
            } catch (error: any) {
                set({ error: true, loading: false });
            }
        },
    }),
    // Shallow comparison function for equality check
    Object.is
);
