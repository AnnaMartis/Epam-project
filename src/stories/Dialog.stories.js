import { MovieForm } from "../entities/MovieForm/MovieForm";
import { Dialog } from "../shared/ui";

export default {
  title: "Dialog",
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const AddMovie = Template.bind({});
export const EditMovie = Template.bind({});
export const DeleteMovie = Template.bind({});

AddMovie.args = {
  title: "Add Movie",
  children: <MovieForm />,
};

EditMovie.args = {
  title: "Edit Movie",
  children: (
    <MovieForm
      initialMovie={{
        title: "Pulp fiction",
        movieUrl: "https://www.imdb.com/title/tt0110912/?ref_=tt_mv_close",
        genre: "CRIME",
        overview: "Decription",
        releaseDate: "1994-05-06",
        rating: 8.9,
        runtime: "2h 10min",
      }}
    />
  ),
};

DeleteMovie.args = {
  title: "Delete Movie",
  children: (
    <div>
      <p style={{ marginBottom: "30px" }}>
        Are you sure you want to delete this movie?
      </p>
      <button style={{ padding: "4px 20px", cursor: "pointer" }}>
        Confirm
      </button>
    </div>
  ),
};
