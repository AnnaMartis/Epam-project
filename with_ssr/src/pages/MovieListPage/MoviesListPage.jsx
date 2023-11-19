"use client";
import "./MoviesListPage.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SelectTabs } from "../../entities/SelectTabs/SelectTabs";
import { genresList } from "../../entities/SelectTabs/selectTabsMock";
import { MovieTitle, SortControl } from "../../entities";
import { moviesSortOptions } from "../../entities/SortControl/sortControlMock";

export const MovieListPage = ({ initialMovies, children }) => {


  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateURLSearchParam = async (field, value) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(field, value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const handleChangeSelectedGenre = (event) => {
    updateURLSearchParam("genre", event.target.value);
  };

  const handleChangeSortCriterion = (event) => {
    updateURLSearchParam("sort", event.target.value);
  };

  const handleMovieClick = (id) => {
    router.push(`/${id}`);
  };

  return (
    <div className="list-page">
      <div className="list-page-upper">
        {children}
      </div>
      <div className="list-page-lower">
        <div className="config-list-part">
          <SelectTabs
            genres={genresList}
            selectedGenre={searchParams.get("genre") ?? "ALL"}
            onSelect={handleChangeSelectedGenre}
          />
          <SortControl
            options={moviesSortOptions}
            selectedOption={searchParams.get("sort") ?? moviesSortOptions[0]}
            onSelect={handleChangeSortCriterion}
          />
        </div>
        <div className="movies-list-part">
          <p className="found-movies">{initialMovies.length} movies found</p>
          <div className="movies-list">
            {initialMovies?.map((movie) => {
              return (
                <MovieTitle
                  key={movie.id}
                  movieTitle={{
                    id: movie.id,
                    movieName: movie.title,
                    releaseYear: movie.release_date,
                    genres: movie.genres,
                    imgUrl: movie.poster_path,
                    onClick: () => handleMovieClick(movie.id),
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
