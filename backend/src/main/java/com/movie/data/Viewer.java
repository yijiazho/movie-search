package com.movie.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
class Viewer {
    private double rating;
    private int numReviews;
    private int meter;
}

