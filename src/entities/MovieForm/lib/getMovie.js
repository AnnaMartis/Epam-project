export const getMovie = (movie) => {
    return ({
        title: movie?.title ?? "",
        movieUrl: movie?.movieUrl ?? "",
        genre: movie?.genre ?? "ALL",
        overview: movie?.overview ?? "",
        releaseDate: movie?.releaseDate ?? "",
        rating: movie?.rating ?? "",
        runtime: movie?.runtime ?? "",
      })
}