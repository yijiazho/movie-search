export interface Movie {
    plot: string;
    title: string;
    cast: string[];
    genres: string[];
    languages: string[];
    rated: string;
    released: Date;
    imdb:Imdb;
    countries: string[];
    tomatoes: Tomatoes;
}

export interface Imdb {
    id: number;
    votes: number;
    rating: number;
}

export interface Tomatoes {
    viewer: Viewer;
    lastUpdated: Date;
}

export interface Viewer {
    rating: number;
    numReviews: number;
    meter: number;
}
