import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MovieTitle } from "./MovieTitle";

describe("MovieTitle Component Functionality", () => {
  test("Should genres, release year, movie name be on document", () => {
    const mockImgUrl = "https://via.placeholder.com/300/92c952";
    const mockMovieName = "Inception";
    const mockReleaseYear = "2009";
    const mockGenres = ["Action"];

    const mockedMovieTitle = {
      imgUrl: mockImgUrl,
      movieName: mockMovieName,
      releaseYear: mockReleaseYear,
      genres: mockGenres,
      onClick: () => {},
    };

    render(
      <MovieTitle
        movieTitle={mockedMovieTitle}
      />
    );

    const genres = screen.getByText(mockGenres[0]);
    const movieName = screen.getByText(mockedMovieTitle.movieName);
    const releaseYear = screen.getByText(mockedMovieTitle.releaseYear);
    expect(genres).toBeInTheDocument();
    expect(movieName).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
  });

  test('Should render image with alt text', ()=>{

    const mockImgUrl = "https://via.placeholder.com/300/92c952";
    const mockMovieName = "Inception";
    const mockReleaseYear = "2009";
    const mockGenres = ["Action"];

    const mockedMovieTitle = {
      imgUrl: mockImgUrl,
      movieName: mockMovieName,
      releaseYear: mockReleaseYear,
      genres: mockGenres,
      onClick: () => {},
    };

    render(
      <MovieTitle
        movieTitle={mockedMovieTitle}
      />
    );

    const image = screen.getByAltText('movie');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockedMovieTitle.imgUrl)
  })
});
