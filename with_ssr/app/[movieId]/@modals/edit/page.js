import { Dialog, MovieForm } from "@/src/entities";
import { getSelectedMovieDetails } from "../../page";

export async function NewMovie({params}) {
  const selectedMovie = await getSelectedMovieDetails(params.id);
  return (
    <Dialog title="Edit Movie">
      <MovieForm initialMovie={selectedMovie}/>
    </Dialog>
  );
}
