import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MovieTitle } from "./MovieTitle";

describe("MovieTitle Component Functionality", () => {
  test("Should genres be on document", () => {
    const mockImgUrl = "https://via.placeholder.com/300/92c952";
    const mockMovieName = "Inception";
    const mockReleaseYear = "2009";
    const mockGenres = ["Action"];

    render(
      <MovieTitle
        imgUrl={mockImgUrl}
        movieName={mockMovieName}
        releaseYear={mockReleaseYear}
        genres={mockGenres}
        onClickCB={()=>{}}
      />
    );

    const element = screen.getByText(mockGenres[0]);
    expect(element).toBeInTheDocument();
  });
});
