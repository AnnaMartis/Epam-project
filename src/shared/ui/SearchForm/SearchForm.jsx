import { useState } from "react";
import "./SearchForm.css";
import { palette } from "../../styles/palette";

const SearchForm = ({ initialValue, onSearch, placeholder }) => {
  const [queryValue, setQueryValue] = useState(initialValue);

  const handleQueryValueChange = (event) => {
    setQueryValue(event.target.value);
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
        style={{
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        }}
        value={queryValue}
        onChange={handleQueryValueChange}
        onKeyDown={handleKeyPress}
        onFocus={onSearch}
        placeholder={placeholder}
      />
      <button
        className="search-button"
        style={{
          backgroundColor: palette.primary.light,
          color: palette.primary.contrastText,
        }}
        type="submit"
      >
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
