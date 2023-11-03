import { useOutletContext } from "react-router";
import { SearchForm } from "../SearchForm/SearchForm";
import { Link, Outlet } from "react-router-dom";

export const SearchFormWrapper = () => {
  const { searchParam, handleSearch } = useOutletContext();

  return (
    <>
      <Outlet />
      <div className="add-movie-part">
        <Link to="/new" className="outlined-button">Add Movie</Link>
      </div>
      <div className="find-movie-part">
        <p className="find-movie-title">FIND YOUR MOVIE</p>
        <SearchForm
          initialValue={searchParam ?? ""}
          onSearch={handleSearch}
          placeholder="What do you want to search?"
        />
      </div>
    </>
  );
};
