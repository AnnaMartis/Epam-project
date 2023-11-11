import { SearchForm, SearchFormWrapper } from "@/src/entities";
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
    const movies = [
      {
        title: "La La Land",
        tagline: "Here's to the fools who dream.",
        vote_average: 7.9,
        vote_count: 6782,
        release_date: "2016-12-29",
        poster_path: "https://via.placeholder.com/300/92c952",
        overview:
          "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
        budget: 30000000,
        revenue: 445435700,
        runtime: 128,
        genres: ["Comedy", "Drama", "Romance"],
        id: 313369,
      },
    ];
    return movies;
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
