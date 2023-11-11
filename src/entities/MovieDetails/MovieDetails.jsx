import "./MovieDetails.css";
import Image from "next/image";
import Link from 'next/link'

export const MovieDetails = ({
  movie = {
    movieName: "La La Land",
    releaseYear: 2016 - 12 - 29,
    imgUrl: "https://via.placeholder.com/300/92c952",
    duration: "128",
    rating: 7.9,
    description:
      "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  },
}) => {
 
  let { imgUrl, movieName, releaseYear, rating, duration, description } = movie;


  return (
    <>
      <div className="movie-details">
        <div className="movie-image">
          <Image src={imgUrl} alt="movie" width={300} height={300} />
        </div>
        <div className="movie-content">
          <div className="movie-title-wrapper">
            <div className="movie-title">
              <p className="name">{movieName}</p>
              <p className="rating">{rating}</p>
            </div>
            <Link href={'/'} className="movie-close">X</Link>
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
    </>
  );
};
