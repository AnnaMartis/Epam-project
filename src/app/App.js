import {useState} from 'react';
import './App.css';
import Counter from '../shared/ui/Counter/Counter';
import SearchForm from '../shared/ui/SearchForm/SearchForm';
import SelectTabs from '../shared/ui/SelectTabs/SelectTabs';


const genres = [
  { id: "all", name: "genre", value: "ALL" },
  { id: "doc", name: "genre", value: "DOCUMENTARY" },
  { id: "com", name: "genre", value: "COMEDY" },
  { id: "horror", name: "genre", value: "HORROR" },
  { id: "crime", name: "genre", value: "CRIME" },
];

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
        initialValue={''}
        onSearch={handleSearch}
        placeholder={"What do you want to search?"}
      />
      <SelectTabs
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleChangeSelectedGenre}
      />
    </div>
  );
};

export default App;
