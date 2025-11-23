import React from "react";

export default function MovieList({ onMovieClick }) {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "The Dark Knight", year: 2008 }
  ];

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => onMovieClick(movie)}>
              {movie.title} ({movie.year})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
