'use server'
import { SearchForm } from "../SearchForm/SearchForm";
import Link from 'next/link'

export const SearchFormWrapper = ({searchParam}) => {

  return (
    <>
      <div className="add-movie-part">
         <Link href="/new" className="outlined-button">Add Movie</Link>
       </div>
      <div className="find-movie-part">
        <p className="find-movie-title">FIND YOUR MOVIE</p>
        <SearchForm
          initialValue={searchParam ?? ""}
          placeholder="What do you want to search?"
        />
      </div>
    </>
  );
};
