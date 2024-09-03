package com.movie.data;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Movie {
    String plot;
    String title;
    List<String> cast;
    List<String> genres;
    List<String> languages;
    String rated;
    Date released;
    Imdb imdb;
    List<String> countries;
    Tomatoes tomatoes;

    @Override
    public String toString() {
        return "Movie [\n  title=" + title + ",\n  genres=" + genres + ",\n  plot=" + plot + "\n]";
    }
}
