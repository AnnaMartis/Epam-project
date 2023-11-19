import { Dialog, MovieForm } from "@/src/entities";

export default function NewMovie() {
  return (
    <Dialog title="Add Movie">
      <MovieForm />
    </Dialog>
  );
}
