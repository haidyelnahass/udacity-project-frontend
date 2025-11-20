
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Mock MovieList component
jest.mock("./components/MovieList", () => {
  return function MockMovieList({ onMovieClick }) {
    return (
      <div>
        <h2>Mock Movie List</h2>
        <button onClick={() => onMovieClick({ title: "Inception", year: 2010 })}>
          Select Inception
        </button>
      </div>
    );
  };
});

// Mock MovieDetails component
jest.mock("./components/MovieDetails", () => {
  return function MockMovieDetails({ movie }) {
    return (
      <div data-testid="movie-details">
        <p>{movie.title}</p>
        <p>{movie.year}</p>
      </div>
    );
  };
});

describe("App Component", () => {
  test("renders movie list heading", () => {
    render(<App />);
    expect(screen.getByText("Movie List")).toBeInTheDocument();
  });

  test("renders MovieList component", () => {
    render(<App />);
    expect(screen.getByText("Mock Movie List")).toBeInTheDocument();
  });

  test("shows movie details after clicking a movie", () => {
    render(<App />);

    // Click the mock movie button
    fireEvent.click(screen.getByText("Select Inception"));

    // Movie details heading
    expect(screen.getByText("Movie Details")).toBeInTheDocument();

    // Details rendered
    expect(screen.getByTestId("movie-details")).toHaveTextContent("Inception");
    expect(screen.getByTestId("movie-details")).toHaveTextContent("2010");
  });

  test("does not show MovieDetails before a movie is selected", () => {
    render(<App />);
    expect(screen.queryByTestId("movie-details")).toBeNull();
  });
});
