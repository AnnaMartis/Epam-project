import { SortControl } from "../shared/ui";
import { moviesSortOptions } from "../shared/ui/SortControl/sortControlMock";

export default {
  title: "SortControl",
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: moviesSortOptions,
  selectedOption: moviesSortOptions[1],
  onSelectCB: () => {},
};
