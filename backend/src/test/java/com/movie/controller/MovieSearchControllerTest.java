package com.movie.controller;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.movie.data.Movie;
import com.movie.data.MovieRequest;

@SpringBootTest
public class MovieSearchControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MovieSearchController controller;

    @Autowired
    private ObjectMapper mapper;

    @Test
    public void testGetMovie() throws Exception {
        MovieRequest request = new MovieRequest();
        request.setTitle("Back to the Future");
        request.setCast(List.of("Lea Thompson", "Christopher Lloyd"));
        request.setGenres(List.of("Adventure"));
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.YEAR, 2000);
        cal.set(Calendar.MONTH, Calendar.JANUARY);
        cal.set(Calendar.DAY_OF_MONTH, 1);
        request.setReleasedBefore(cal.getTime());

        String jsonData = mapper.writeValueAsString(request);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/movie")
            .contentType("application/json")
            .content(jsonData))
            .andExpect(status().isOk())
            .andReturn();


        String content = result.getResponse().getContentAsString();
        List<Movie> output = mapper.readValue(content, new TypeReference<List<Movie>>() {});

        assertEquals(1, output.size());
        Movie movie = output.get(0);
        assertTrue(movie.getPlot().contains("time-traveling"));
    }
}
