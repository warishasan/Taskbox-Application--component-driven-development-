
import React from 'react';
import NewTaskScreen, {props} from './NewTaskScreen';
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  component: NewTaskScreen,
  title: 'New Task Screen',
 } as Meta

const Template:Story<props> = args => <NewTaskScreen {...args} />;

export const Open  = Template.bind({});
Open.args = {
    open: true
}

export const Close  = Template.bind({});
Close.args = {
    open: false
}


