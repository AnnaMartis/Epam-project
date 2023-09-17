import "./MovieTitle.css";

export const MovieTitle = ({
  imgUrl,
  movieName,
  releaseYear,
  genres,
  onClickCB,
}) => {
  console.log("movieNamee", movieName);
  return (
    <div className="movie-title" onClick={onClickCB}>
      <img src={imgUrl} alt="movie" className="movie-image" />
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
