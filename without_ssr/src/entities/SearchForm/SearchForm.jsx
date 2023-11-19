import { useState } from "react";
import "./SearchForm.css";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";

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

  const handleInputFocus = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form
      className="search"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        data-testid="search-input"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={handleInputFocus}
        placeholder={placeholder}
      />
      <CustomButton
        data-testid="search-button"
        className="contained-button"
        type="submit"
        label="SEARCH"
      />
    </form>
  );
};
