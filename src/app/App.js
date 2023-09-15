import { useState } from "react";
import "./App.css";
import { Counter, SearchForm, SelectTabs } from "../shared/ui/index.jsx";
import { genresList } from "../shared/ui/SelectTabs/selectTabsMock.js";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const handleSearch = (event) => {
    event.preventDefault();
  };

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
