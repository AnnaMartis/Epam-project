import "./MoviesListPage.css";
import { useEffect, useState } from "react";
import { SearchForm } from "../../entities/SearchForm/SearchForm";
import { SelectTabs } from "../../entities/SelectTabs/SelectTabs";
import { genresList } from "../../entities/SelectTabs/selectTabsMock";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import { MovieDetails, MovieTitle, SortControl } from "../../entities";
import { moviesSortOptions } from "../../entities/SortControl/sortControlMock";

export const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(moviesSortOptions[0]);
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const handleSearch = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const handleChangeSelectedGenre = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleChangeSortCriterion = (event) => {
    setSortCriterion(event.target.value);
  };

  const handleMovieTitleClick = (movieProps) => {
    setSelectedMovie(movieProps);
  };

  const handleMovieViewClosed = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000?sortBy=${
            sortCriterion.value
          }?search=${searchQuery}?filter=${[selectedGenre]}`
        );
        const json = await response.json();
        const data = JSON.stringify(json);
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
        {!selectedMovie && (
          <>
            <div className="add-movie-part">
              <CustomButton className="outlined-button" label="+ADD MOVIE" />
            </div>
            <div className="find-movie-part">
              <p className="find-movie-title">FIND YOUR MOVIE</p>
              <SearchForm
                initialValue={""}
                onSearch={handleSearch}
                placeholder={"What do you want to search?"}
              />
            </div>
          </>
        )}
        {selectedMovie && (
          <MovieDetails
            movie={selectedMovie}
            handleMovieViewClosed={handleMovieViewClosed}
          />
        )}
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
                    movieName: movie.title,
                    releaseYear: movie.release_date,
                    onClick: () =>
                      handleMovieTitleClick({
                        imgUrl: movie.poster_path,
                        movieName: movie.title,
                        releaseYear: movie.release_date,
                        rating: movie.vote_average,
                        duration: movie.runtime,
                        description: movie.overview,
                      }),
                    genres: movie.genres,
                    imgUrl: movie.poster_path,
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
