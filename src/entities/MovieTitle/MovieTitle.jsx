import "./MovieTitle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cx from "classnames";

export const MovieTitle = ({ movieTitle }) => {
  const { imgUrl, movieName, releaseYear, genres, onClick } = movieTitle;
  const [isContextDropdownOpen, setContextDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setContextDropdownOpen((prevValue) => !prevValue);
  };

  return (
    <div className="movie-title" onClick={onClick}>
      <img src={imgUrl} alt="movie" className="movie-image" />
      <div className="context-menu">
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="context-icon"
          onClick={toggleDropdown}
        />
        <div
          className={cx("items", {
            hidden: !isContextDropdownOpen,
          })}
        >
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>

      <div className="movie-content">
        <div className="title">
          <p className="movie-name">{movieName}</p>
          <p className="release-year">{releaseYear}</p>
        </div>
        <div className="genres">
          {genres.map((genre, id) => {
            return <p key={id}>{genre}</p>;
          })}
        </div>
      </div>
    </div>
  );
};



