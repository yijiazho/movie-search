import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieComponent from './component/movie/movie-component';
import FilterComponent from './component/filter/filter.component';

function App() {
  return (
    <div className="App">
      
      <FilterComponent />
      <MovieComponent />
    </div>

  );
}

export default App;
