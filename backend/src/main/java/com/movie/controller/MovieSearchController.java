package com.movie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.data.Movie;

@RestController
public class MovieSearchController {
    

    @GetMapping("movie")
    @ResponseBody
    public ResponseEntity<Movie> getMovie() {
        
        return null;
    }
}
