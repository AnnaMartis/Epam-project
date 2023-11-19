import { MAIN_API } from "../app/config";

export const loader = async ({ params }) => {
  try {
    const response = await fetch(MAIN_API + `${params.movieId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return {message: 'error'}
  }
};
