import { useOutletContext } from "react-router";
import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { Outlet } from "react-router-dom";

export const SearchFormWrapper = () => {
  const { searchParam, handleSearch } = useOutletContext();

  return (
    <>
        <Outlet/>
      <div className="add-movie-part">
        <CustomButton className="outlined-button" label="+ADD MOVIE" />
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
