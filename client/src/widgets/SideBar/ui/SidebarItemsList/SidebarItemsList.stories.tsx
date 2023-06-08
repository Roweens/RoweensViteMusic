import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SidebarItemsList } from './SidebarItemsList';

export default {
    title: 'shared/SidebarItemsList',
    component: SidebarItemsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarItemsList>;

const Template: ComponentStory<typeof SidebarItemsList> = (args) => (
    <SidebarItemsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
