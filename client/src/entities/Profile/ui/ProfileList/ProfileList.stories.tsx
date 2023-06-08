import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileList } from './ProfileList';

export default {
    title: 'shared/ProfileList',
    component: ProfileList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileList>;

const Template: ComponentStory<typeof ProfileList> = (args) => (
    <ProfileList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
