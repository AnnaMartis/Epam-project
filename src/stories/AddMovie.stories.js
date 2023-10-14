import { MovieForm } from "../entities/MovieForm/MovieForm";
import { Dialog } from "../entities";

export default{
    title: "AddMovie",
    component: Dialog
};


const Template = (args) => <Dialog {...args}/>

export const Default = Template.bind({});


Default.args = {
    title: "Add Movie",
    children: <MovieForm/>
  };
  