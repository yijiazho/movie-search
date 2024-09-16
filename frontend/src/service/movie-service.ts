import { Movie } from "../data/movie/movie";
import { MovieRequest } from "../data/movie/movie-request";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getMovies = async (movieRequest: MovieRequest): Promise<Movie[]> => {
    try {
        console.log("send request in service .......")
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