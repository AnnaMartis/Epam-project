import { useState } from "react";
import "./SearchForm.css";

export const SearchForm = ({ initialValue = "", onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <form className="search" onSubmit={()=> onSearch(searchValue)}>
      <input
        type="text"
        data-testid="search-input"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={onSearch}
        placeholder={placeholder}
      />
      <button
        data-testid="search-button"
        className="search-button"
        type="submit"
      >
        SEARCH
      </button>
    </form>
  );
};
