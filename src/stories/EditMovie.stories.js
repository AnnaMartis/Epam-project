import { MovieForm } from "../entities/MovieForm/MovieForm";
import { Dialog } from "../shared/ui";

export default {
  title: "EditMovie",
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Edit Movie",
  children: (
    <MovieForm
      initialMovie={{
        title: "Pulp fiction",
        movieUrl: "https://www.imdb.com/title/tt0110912/?ref_=tt_mv_close",
        genre: "CRIME",
        overview: "Decription",
        releaseDate: '1994-05-06',
        rating: 8.9,
        runtime: "2h 10min"
      }}
    />
  ),
};
