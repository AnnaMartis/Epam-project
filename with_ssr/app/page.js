import { SearchForm, SearchFormWrapper } from "@/src/entities";
import { mockedMovies } from "@/src/entities/MovieDetails/movieDetails.mock";
import { MovieListPage } from "@/src/pages/MovieListPage/MoviesListPage";

export const getMoviesData = async (searchParams) => {
  try {
    const queryParams = new URLSearchParams({
      sortBy: searchParams.sort,
      search: searchParams.search,
      filter: [searchParams.genre],
    });
    const response = await fetch(`${MAIN_API}?${queryParams}`);
    const movies = await response.json();
    return movies;
  } catch (error) {
    return mockedMovies;
  }
};

export default async function Home({ searchParams }) {
  const data = await getMoviesData(searchParams);
  return (
    <MovieListPage initialMovies={data}>
      <SearchFormWrapper searchParam={searchParams.search} />
    </MovieListPage>
  );
}
