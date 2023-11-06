import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieListPage } from "../pages/MovieListPage/MoviesListPage.jsx";
import { moviecrudPaths } from "./paths/Moviecrud.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      moviecrudPaths
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
