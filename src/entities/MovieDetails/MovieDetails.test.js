import "@testing-library/jest-dom";
import { MovieDetails } from "./MovieDetails";
import { render } from "@testing-library/react";
import { mockedMovie } from "./movieDetails.mock";


describe("MovieDetails Component Functionality", () => {
  test("Should render movie details", () => {
    const {getByText} =render(<MovieDetails movie={mockedMovie} />);

    expect(getByText(mockedMovie.movieName)).toBeInTheDocument();
    expect(getByText(mockedMovie.releaseYear)).toBeInTheDocument();
    expect(getByText(mockedMovie.duration)).toBeInTheDocument();
    expect(getByText(mockedMovie.rating)).toBeInTheDocument();
    expect(getByText(mockedMovie.description)).toBeInTheDocument();
  });

  test ("Should render the movie image with alt text", ()=>{
    const {getByAltText} = render(<MovieDetails movie={mockedMovie} />);
    const image = getByAltText('movie');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockedMovie.imgUrl);
  })
});