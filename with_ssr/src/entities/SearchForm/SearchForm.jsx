"use client"
import { useState } from "react";
import "./SearchForm.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";

export const SearchForm = ({ initialValue = "", placeholder }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchValue, setSearchValue] = useState(initialValue);

  const updateURLSearchParam = async (field, value) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(field, value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const onSearch = (searchValue) => {
    updateURLSearchParam("search", searchValue);
  };

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
