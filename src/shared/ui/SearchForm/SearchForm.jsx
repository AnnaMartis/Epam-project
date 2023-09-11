import { useState } from "react";
import "./SearchForm.css";

export const SearchForm = ({ initialValue = "", onChange, placeholder }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onChange(event);
    }
  };

  return (
    <form className="search" data-testid="search-form" onSubmit={onChange}>
      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={onChange}
        placeholder={placeholder}
      />
      <button className="search-button" type="submit">
        SEARCH
      </button>
    </form>
  );
};
