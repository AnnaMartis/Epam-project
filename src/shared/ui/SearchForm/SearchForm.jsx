import { useState } from "react";
import "./SearchForm.css";

export const SearchForm = ({ initialValue, onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const updateSearchValue = (value) => {
    setSearchValue(value);
   };

  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(event);
    }
  };

  return (
    <form className="search" onSubmit={onSearch}>
      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={onSearch}
        placeholder={placeholder}
      />
      <button
        className="search-button"
        type="submit"
      >
        SEARCH
      </button>
    </form>
  );
};

