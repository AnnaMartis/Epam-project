export const MovieTitle = ({
  imgUrl,
  movieName,
  releaseYear,
  genres,
  onClickCB,
}) => {
  return (
    <div className="movie-title" onClick={onClickCB}>
      <img src={imgUrl} alt="movie" />
      <div className="content">
        <div className="title">
          <p>{movieName}</p>
          <p>{releaseYear}</p>
        </div>
      </div>
    </div>
  );
};
