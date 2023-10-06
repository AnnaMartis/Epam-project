import { MovieDetails } from "../entities";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});

Default.args = {
  movie: {
    movieName: "Pulp Fiction",
    releaseYear: 2004,
    imgUrl: "https://via.placeholder.com/300/92c952",
    duration: "2h 34min",
    rating: 8.9,
    description: "Test",
  },
};