import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MovieListPage } from "../pages/MovieListPage/MoviesListPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <MovieListPage/>,
  },
]);

export const App = () => {
 
  return (
    <RouterProvider router={router} />
  );
};
