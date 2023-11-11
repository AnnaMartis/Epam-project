import { MAIN_API } from "@/src/app/config";
import { getMoviesData } from "../page";
import { MovieDetails } from "@/src/entities";
import { MovieListPage } from "@/src/pages/MovieListPage/MoviesListPage";


export const getSelectedMovieDetails = async(id) => {
  try {
    const response = await fetch(MAIN_API + `${params.movieId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return {message: 'error'}
  }
}

export default async function SelectedMovie({ searchParams, params }) {
  const data = await getMoviesData(searchParams);
  const selectedMovie = await getSelectedMovieDetails(params.id);
  return (
    <MovieListPage initialMovies={data}>
      <MovieDetails movie={selectedMovie}/>
    </MovieListPage>
  );
}
