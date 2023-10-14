import { useState } from "react";
import { Counter } from "../../entities/Counter/Counter";
import { SearchForm } from "../../entities/SearchForm/SearchForm";
import { SelectTabs } from "../../entities/SelectTabs/SelectTabs";
import { genresList } from "../../entities/SelectTabs/selectTabsMock";
import "./MoviesListPage.css";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import { MovieTitle, SortControl } from "../../entities";
import { moviesSortOptions } from "../../entities/SortControl/sortControlMock";

export const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(moviesSortOptions[1]);
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

  return (
    <div className="list-page">
      <div className="list-page-upper">
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
          <p className="found-movies">39 movies found</p>
          <div className="movies-list">
            <MovieTitle
              movieTitle={{
                movieName: "Pulp Fiction",
                releaseYear: 2004,
                onClick: () => {},
                genres: ["Action & Adventure"],
                imgUrl: "https://via.placeholder.com/300/92c952",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
