package com.movie.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.BsonDocument;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.movie.data.Movie;
import com.movie.data.MovieRequest;

import io.micrometer.common.util.StringUtils;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
public class MovieSearchController {
    @Autowired
    private MongoClient mongoClient;
    @Autowired
    private MongoDatabase mongoDatabase;
    @Autowired
    private ObjectMapper mapper;

    @PostMapping("/movie")
    @ResponseBody
    public ResponseEntity<List<Movie>> getMovie(@RequestBody MovieRequest movieRequest) throws JsonProcessingException {
        log.info("get movie");
        log.info(mapper.writeValueAsString(movieRequest));

        String title = movieRequest.getTitle();
        String plot = movieRequest.getPlot();
        List<String> cast = movieRequest.getCast();
        Date startDate = movieRequest.getReleasedAfter();
        Date endDate = movieRequest.getReleasedBefore();
        int pageSize = movieRequest.getPageSize();

        List<Bson> filters = new ArrayList<>();
        
        if (!StringUtils.isEmpty(title)) {
            filters.add(Filters.eq("title", title));
        }

        if (!StringUtils.isEmpty(plot)) {
            filters.add(Filters.eq("plot", plot));
        }
        
        // Add cast filter if provided
        if (cast != null && !cast.isEmpty()) {
            filters.add(Filters.all("cast", cast));
        }
        
        // Add date range filter if startDate and endDate are provided
        if (startDate != null) {
            filters.add(Filters.gte("released", startDate));
        }
        if (endDate != null) {
            filters.add(Filters.lte("released", endDate));
        }


        Bson combinedFilter = filters.isEmpty() ? new BsonDocument() : Filters.and(filters);

        MongoCollection<Movie> collection = mongoDatabase.getCollection("movies", Movie.class);
        FindIterable<Movie> query = collection.find(combinedFilter).limit(pageSize);

        List<Movie> movies = new ArrayList<>();
        query.into(movies);
        log.info("Successfully parsed the response");        
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }
}
