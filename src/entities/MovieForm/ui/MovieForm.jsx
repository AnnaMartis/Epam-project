import React from "react";
import { useOutletContext } from "react-router";
import "./MovieForm.css";
import { genresList } from "../../../entities/SelectTabs/selectTabsMock";
import { getMovie } from "../lib/getMovie";
import { useForm, Controller } from "react-hook-form";

export const MovieForm = ({ initialMovie }) => {
  const { movie } = useOutletContext() ?? {initialMovie};

  const { handleSubmit, control, reset } = useForm({
    defaultValues: getMovie(movie),
  });

  const onFormSubmit = (data) => {
    if (movie) {
      console.log("send request to edit a movie");
    } else {
      console.log("send a request to add a new movie");
    }
  };

  return (
    <form
      className="movie-form"
      action="#"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="movie-body">
        <div className="movie-body-blocks">
          <div className="first-block">
            <div className="block-item">
              <label htmlFor="title">Title</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      {...field}
                      className="field"
                      type="text"
                      id={field.name}
                    />
                  );
                }}
              />
            </div>
            <div className="block-item">
              <label htmlFor="movieUrl">Movie URL</label>
              <Controller
                name="movieUrl"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      {...field}
                      className="field"
                      type="text"
                      id={field.name}
                    />
                  );
                }}
              />
            </div>
            <div className="block-item">
              <label htmlFor="genre">Genre</label>
              <Controller
                name="genre"
                control={control}
                render={({ field }) => {
                  return (
                    <select className="field" id={field.name} {...field}>
                      {genresList.map((genreItem) => {
                        return (
                          <option key={genreItem.id}>{genreItem.value}</option>
                        );
                      })}
                    </select>
                  );
                }}
              />
            </div>
          </div>
          <div className="second-block">
              <div className="block-item">
                <label htmlFor="releaseDate">Release Date</label>
                <Controller
                  name="releaseDate"
                  control={control}
                  render={({ field }) => {
                    return (
                      <input
                        {...field}
                        className="field"
                        type="date"
                        id={field.name}
                      />
                    );
                  }}
                />
              </div>

            <div className="block-item">
              <label htmlFor="rating">Rating</label>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      {...field}
                      className="field"
                      type="number"
                      id={field.name}
                    />
                  );
                }}
              />
            </div>

            <div className="block-item">
              <label htmlFor="runtime">Runtime</label>
              <Controller
                name="runtime"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      {...field}
                      className="field"
                      type="text"
                      id={field.name}
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="block-item">
          <label htmlFor="overview">Overview</label>
          <Controller
            name="overview"
            control={control}
            render={({ field }) => {
              return (
                <textarea
                  className="field"
                  type="text"
                  id={field.name}
                  cols="30"
                  rows="5"
                  {...field}
                />
              );
            }}
          />
        </div>
      </div>
      <div className="movie-footer">
        <input className="movie-reset-button" onClick={()=>reset(getMovie(movie))} type="button" value={"Reset"}/>
        <button className="movie-submit-button" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};
