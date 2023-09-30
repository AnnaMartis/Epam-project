import { MovieForm } from "../entities/MovieForm/MovieForm";
import { Dialog } from "../shared/ui";

export default {
  title: "DeleteMovie",
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Delete Movie",
  children: (
    <div>
        <p style={{marginBottom: '30px'}}>Are you sure you want to delete this movie?</p>
        <button style={{padding: '4px 20px', cursor: 'pointer'}}>Confirm</button>
    </div>
  ),
};
