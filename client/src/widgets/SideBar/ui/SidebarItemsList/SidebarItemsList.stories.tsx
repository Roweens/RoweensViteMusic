import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBarItemsList } from './SidebarItemsList';

export default {
   title: 'shared/SideBarItemsList',
   component: SideBarItemsList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof SideBarItemsList>;

const Template: ComponentStory<typeof SideBarItemsList> = (args) => <SideBarItemsList { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
