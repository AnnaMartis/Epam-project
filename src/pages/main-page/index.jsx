import { useState } from "react";
import Counter from "../../components/counter";
import Searcher from "../../components/searcher";
import "./styles.css";
import Selector from "../../components/selecter";

const genres = [
  { id: "all", name: "genre", value: "ALL" },
  { id: "doc", name: "genre", value: "DOCUMENTARY" },
  { id: "com", name: "genre", value: "COMEDY" },
  { id: "horror", name: "genre", value: "HORROR" },
  { id: "crime", name: "genre", value: "CRIME" },
];

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const handleSearchQueryChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue('');
  };

  const handleChangeSelectedGenre = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="main-page">
      <Counter initialValue={5} />
      <Searcher
        value={searchValue}
        onChange={handleSearchQueryChange}
        onSearch={handleSearch}
        placeholder={'What do you want to search?'}
      />
      <Selector
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleChangeSelectedGenre}
      />
    </div>
  );
};

export default MainPage;
