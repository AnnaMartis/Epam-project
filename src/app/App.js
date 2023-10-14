import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieListPage } from "../pages/MovieListPage/MoviesListPage.jsx";
import { MovieDetails } from "../entities/MovieDetails/MovieDetails.jsx";
import { SearchForm } from "../entities/SearchForm/SearchForm.jsx";
import { loader as movieLoader } from "../routes/movie.jsx";
import { CustomButton } from "../shared/ui/CustomButton/CustomButton.jsx";
import { SearchFormWrapper } from "../entities/SearchFormWrapper/SearchFormWrapper.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <SearchFormWrapper/>
      },
      {
        path: "/:movieId",
        loader: movieLoader,
        element: <MovieDetails />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
