import { Counter } from "../shared/ui/";

export default {
  title: "Counter - A Simple Counter Wich Increments and Decrements Values",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});

Default.args = {
  initialValue: 10,
};
