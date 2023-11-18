import { CustomButton } from "../../shared/ui/CustomButton/CustomButton";
import { SearchForm } from "../SearchForm/SearchForm";

export const AddMovie = ({ handleSearch }) => {
  return (
    <>
      <div className="add-movie-part">
        <CustomButton className="outlined-button" label="+ADD MOVIE" />
      </div>
      <div className="find-movie-part">
        <p className="find-movie-title">FIND YOUR MOVIE</p>
        <SearchForm
          initialValue={""}
          onSearch={handleSearch}
          placeholder={"What do you want to search?"}
        />
      </div>
    </>
  );
};
