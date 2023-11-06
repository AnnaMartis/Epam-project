import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieListPage } from "../pages/MovieListPage/MoviesListPage.jsx";
import { MovieDetails } from "../entities/MovieDetails/MovieDetails.jsx";
import { loader as movieLoader } from "../routes/movie.jsx";
import { SearchFormWrapper } from "../entities/SearchFormWrapper/SearchFormWrapper.jsx";
import { Dialog, MovieForm } from "../entities/index.jsx";
import { paths } from "../shared/routing/paths.js";


const router = createBrowserRouter([
  {
    path: paths.home,
    element: <MovieListPage />,
    children: [
      {
        path: paths.home,
        element: <SearchFormWrapper />,
        children: [
          {
            path: paths.movieNew,
            element: (
              <Dialog title="Add Movie">
                <MovieForm />
              </Dialog>
            ),
          },
          {
            path: paths.movieDetails,
            loader: movieLoader,
            element: <MovieDetails />,
            children: [
              {
                path: paths.movieEdit,
                element: (
                  <Dialog title="Edit Movie">
                    <MovieForm />
                  </Dialog>
                ),
    
              }
            ]
          },
        ],
      }
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
