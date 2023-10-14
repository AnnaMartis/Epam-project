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

  return (
    <form
      className="search"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchValue);
      }}
    >
      <input
        type="text"
        data-testid="search-input"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={(event) => {
          event.preventDefault();
          onSearch(searchValue);
        }}
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
