import { useState } from "react";
import "./App.css";
import { Counter, SearchForm, SelectTabs } from "../shared/ui";



const App = () => {
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
        selectedGenre={selectedGenre}
        onSelect={handleChangeSelectedGenre}
      />
    </div>
  );
};

export default App;
