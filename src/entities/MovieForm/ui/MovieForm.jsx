import React, { useState } from "react";
import "./MovieForm.css";
import { genresList } from "../../../entities/SelectTabs/selectTabsMock";
import { getMovie } from "../lib/getMovie";

export const MovieForm = ({ initialMovie, onFormSubmit }) => {
  const [movie, setMovie] = useState(getMovie(initialMovie));

  const handleFieldChange = (event) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="movie-form" action="#" onSubmit={onFormSubmit}>
      <div className="movie-body">
        <div className="movie-body-blocks">
          <div className="first-block">
            <div className="block-item">
              <label htmlFor="title">Title</label>
              <input
                className="field"
                type="text"
                id="title"
                name="title"
                value={movie.title }
                onChange={handleFieldChange}
              />
            </div>
            <div className="block-item">
              <label htmlFor="movieUrl">Movie URL</label>
              <input
                className="field"
                type="text"
                id="movieUrl"
                name="movieUrl"
                value={movie.movieUrl }
                onChange={handleFieldChange}
              />
            </div>
            <div className="block-item">
              <label htmlFor="genre">Genre</label>
              <select className="field" id="genre" value={movie.genre } name='genre' onChange={handleFieldChange}>
                {genresList.map((genreItem)=>{
                   return <option key={genreItem.id}>{genreItem.value}</option>
                })}
              </select>
            </div>
          </div>
          <div className="second-block">
            <div className="block-item">
              <label htmlFor="releaseDate">Release Date</label>
              <input
                className="field"
                type="date"
                id="releaseDate"
                name="releaseDate"
                value={movie.releaseDate}
                onChange={handleFieldChange}
              />
            </div>
            <div className="block-item">
              <label htmlFor="rating">Rating</label>
              <input
                className="field"
                type="text"
                id="rating"
                name="rating"
                value={movie.rating}
                onChange={handleFieldChange}
              />
            </div>
            <div className="block-item">
              <label htmlFor="runtime">Runtime</label>
              <input
                className="field"
                type="text"
                id="runtime"
                name="runtime"
                value={movie.runtime }
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </div>
        <div className="block-item">
          <label htmlFor="overview">Overview</label>
          <textarea
            className="field"
            type="text"
            id="overview"
            name="overview"
            value={movie.overview }
            onChange={handleFieldChange}
            cols="30"
            rows="5"
          />
        </div>
      </div>
      <div className="movie-footer">
        <button className="movie-reset-button">RESET</button>
        <button className="movie-submit-button" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};
