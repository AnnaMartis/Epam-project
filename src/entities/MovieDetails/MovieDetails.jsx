import "./MovieDetails.css";

export const MovieDetails = ({ movie, handleMovieViewClosed }) => {

  const { imgUrl, movieName, releaseYear, rating, duration, description } =
    movie;
  return (
    <div className="movie-details">
      <div className="movie-image">
        <img src={imgUrl} alt="movie" />
      </div>
      <div className="movie-content">
        <div className="movie-title-wrapper">
          <div className="movie-title">
            <p className="name">{movieName}</p>
            <p className="rating">{rating}</p>
          </div>
          <button className="movie-close" onClick={handleMovieViewClosed}>X</button>
        </div>

        <div className="movie-specs">
          <p>{releaseYear}</p>
          <p>{duration}min</p>
        </div>
        <div className="movie-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
