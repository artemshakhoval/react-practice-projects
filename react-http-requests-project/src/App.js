import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedData = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      };
    });
    setMovies(transformedData);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesData}>Fetch Movies</button>
      </section>
      <section>
        {movies.length ? <MoviesList movies={movies} /> : <p>List is empty.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
