'use client'
import "./MovieTitle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cx from "classnames";
import Link from 'next/link'
import Image from "next/image";

export const MovieTitle = ({ movieTitle }) => {
  const { imgUrl, movieName, releaseYear, genres, onClick } = movieTitle;
  const [isContextDropdownOpen, setContextDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setContextDropdownOpen((prevValue) => !prevValue);
  };

  return (
    <div className="movie-title" onClick={onClick}>
      <Image
        src={imgUrl}
        alt="movie"
        className="movie-image"
        width={300}
        height={300}
      />
      <div
        className="context-menu"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
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
          <Link href={`${movieTitle.id}/edit`}>Edit</Link>
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
