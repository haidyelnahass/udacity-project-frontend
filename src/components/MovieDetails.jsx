export default function MovieDetails({ movie }) {
  if (!movie) return null;

  return (
    <div>
      <p data-testid="movie-title">{movie.title}</p>
      <p data-testid="movie-year">{movie.year}</p>
    </div>
  );
}
