import React from 'react';
import InboxScreen from './InboxScreen';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux'
import { store } from "../../redux/reducer"

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],

} as Meta

const Template:Story<null> = () => <InboxScreen />;

export const Default = Template.bind({});
