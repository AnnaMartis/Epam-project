import { MovieTitle } from "../entities";

export default {
  title: "MovieTitle",
  component: MovieTitle,
};

const Template = (args) => <MovieTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  movieTitle: {
    movieName: "Pulp Fiction",
    releaseYear: 2004,
    onClick: () => {},
    genres: ["Action & Adventure"],
    imgUrl: "https://via.placeholder.com/300/92c952",
  },
};
