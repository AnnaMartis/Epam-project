export const loader = async ({ params }) => {
  try {
    const response = await fetch(`http://localhost:4000/${params.movieId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return {message: 'error'}
  }
};