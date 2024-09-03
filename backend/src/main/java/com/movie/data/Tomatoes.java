package com.movie.data;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tomatoes {
    private Viewer viewer;
    private Date lastUpdated;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class Viewer {
    private double rating;
    private int numReviews;
    private int meter;
}
