import { Movie } from "../data/Movie";
import { MovieRequest } from "../data/movie-request";


export const getMovies = async (movieRequest: MovieRequest): Promise<Movie[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/movie`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieRequest),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data: Movie[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch movies", error);
        throw error;
    }
};