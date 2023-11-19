import "./MoviesListPage.css";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { SelectTabs } from "../../entities/SelectTabs/SelectTabs";
import { genresList } from "../../entities/SelectTabs/selectTabsMock";
import { MovieTitle, SortControl } from "../../entities";
import { moviesSortOptions } from "../../entities/SortControl/sortControlMock";
import { MAIN_API } from "../../app/config";

export const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(
    moviesSortOptions.find(
      (option) => option.value === searchParams.get("sort")
    ) ?? moviesSortOptions[0]
  );
  const [selectedGenre, setSelectedGenre] = useState(
    searchParams.get("genre") ?? "ALL"
  );

  const handleSearch = (searchValue) => {
    setSearchQuery(searchValue);
    setSearchParams((prevSearchParams) => {
      const prevParams = Object.fromEntries(prevSearchParams.entries());
      return { ...prevParams, search: searchValue };
    });
  };

  const handleChangeSelectedGenre = (event) => {
    setSelectedGenre(event.target.value);
    setSearchParams((prevSearchParams) => {
      const prevParams = Object.fromEntries(prevSearchParams.entries());
      return { ...prevParams, genre: event.target.value };
    });
  };

  const handleChangeSortCriterion = (event) => {
    setSortCriterion(event.target.value);
    setSearchParams((prevSearchParams) => {
      const prevParams = Object.fromEntries(prevSearchParams.entries());
      return { ...prevParams, sort: event.target.value };
    });
  };

  const handleMovieClick = (id) => {
    const prevParams = Object.fromEntries(searchParams.entries());
    navigate({
      pathname: `/${id}`,
      search: createSearchParams(prevParams).toString(),
    });
  };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const queryParams = new URLSearchParams({
          sortBy: sortCriterion.value,
          search: searchQuery,
          filter: [selectedGenre],
        });
        const response = await fetch(`${MAIN_API}?${queryParams}`);
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error(error);
        setMovies([
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
        ]);
      }
    };
    getMoviesData();
  }, [searchQuery, sortCriterion, selectedGenre]);

  return (
    <div className="list-page">
      <div className="list-page-upper">
        <Outlet
          context={{ searchParam: searchParams.get("search"), handleSearch }}
        />
      </div>
      <div className="list-page-lower">
        <div className="config-list-part">
          <SelectTabs
            genres={genresList}
            selectedGenre={selectedGenre}
            onSelect={handleChangeSelectedGenre}
          />
          <SortControl
            options={moviesSortOptions}
            selectedOption={sortCriterion}
            onSelect={handleChangeSortCriterion}
          />
        </div>
        <div className="movies-list-part">
          <p className="found-movies">{movies.length} movies found</p>
          <div className="movies-list">
            {movies?.map((movie) => {
              return (
                <MovieTitle
                  key={movie.id}
                  movieTitle={{
                    id:movie.id,
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
