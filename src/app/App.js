import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieListPage } from "../pages/MovieListPage/MoviesListPage.jsx";
import { MovieDetails } from "../entities/MovieDetails/MovieDetails.jsx";
import { loader as movieLoader } from "../routes/movie.jsx";
import { SearchFormWrapper } from "../entities/SearchFormWrapper/SearchFormWrapper.jsx";
import { Dialog, MovieForm } from "../entities/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <SearchFormWrapper />,
        children: [
          {
            path: "/new",
            element: (
              <Dialog title={"Add Movie"}>
                <MovieForm />
              </Dialog>
            ),
          },
        ],
      },
      {
        path: "/:movieId",
        loader: movieLoader,
        element: <MovieDetails />,
        children: [
          {
            path: "/:movieId/edit",
            element: (
              <Dialog title={"Edit Movie"}>
                <MovieForm />
              </Dialog>
            ),

          }
        ]
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
