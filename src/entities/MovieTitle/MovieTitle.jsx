import "./MovieTitle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const MovieTitle = ({
  imgUrl,
  movieName,
  releaseYear,
  genres,
  onClickCB,
}) => {
  const [isContextDropdownOpen, setContextDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setContextDropdownOpen((prevValue) => !prevValue);
  };

  return (
    <div className="movie-title" onClick={onClickCB}>
      <img src={imgUrl} alt="movie" className="movie-image" />
      <div className="context-menu">
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="context-icon"
          onClick={handleToggleDropdown}
        />
        <div className={`items ${isContextDropdownOpen ? "active" : "hidden"}`}>
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
