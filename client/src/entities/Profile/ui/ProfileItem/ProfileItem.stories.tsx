import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileItem } from './ProfileItem';

export default {
    title: 'entities/Profile/ProfileItem',
    component: ProfileItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileItem>;

const Template: ComponentStory<typeof ProfileItem> = (args) => (
    <ProfileItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
