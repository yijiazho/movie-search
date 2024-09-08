package com.movie.data;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieFilter {
    private String plot;
    private String title;
    private List<String> cast;
    private List<String> genres;
    private List<String> languages;
    private List<String> countries;
    private String rated;
    private Date releasedAfter;
    private Date releasedBefore;
}

