import { SelectTabs } from "../shared/ui/";
import { genresList } from "../shared/ui/SelectTabs/selectTabsMock";

export default {
  title: "SelectTabs - a component which allows to switch tabs",
  component: SelectTabs,
};

const Template = (args) => <SelectTabs {...args} />;

export const Default = Template.bind({});

Default.args = {
    selectedGenre: "ALL",
    genres: genresList
}

