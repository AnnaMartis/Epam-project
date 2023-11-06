export const getMovie = (movie) => {
    return ({
        title: movie?.title ?? movie?.movieName ?? "",
        movieUrl: movie?.movieUrl ?? movie?.imgUrl ?? "",
        genre: movie?.genre ?? "ALL",
        overview: movie?.overview ?? movie?.description ?? "",
        releaseDate: movie?.releaseDate ?? movie?.releaseYear ?? "",
        rating: movie?.rating ?? "",
        runtime: movie?.runtime ?? movie?.duration ?? "",
      })
}
