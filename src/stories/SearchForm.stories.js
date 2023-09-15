import { SearchForm } from "../shared/ui/";

export default {
  title: "Search Form - A Simple SearchForm Component",
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});

export const WithValues = Template.bind({});

WithValues.args = {
  initialValue: "Test",
};
