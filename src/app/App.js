import { useState } from "react";
import "./App.css";

import { genresList } from "../entities/SelectTabs/selectTabsMock.js";
import { Counter, SearchForm, SelectTabs } from "../entities/index.jsx";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const handleSearch = (searchValue) => {};

  const handleChangeSelectedGenre = (event) => {
    setSelectedGenre(event.target.value);
  };
  return (
    <div className="main-page">
      <Counter initialValue={5} />
      <SearchForm
        initialValue={""}
        onSearch={handleSearch}
        placeholder={"What do you want to search?"}
      />
      <SelectTabs
        genres={genresList}
        selectedGenre={selectedGenre}
        onSelect={handleChangeSelectedGenre}
      />
    </div>
  );
};
