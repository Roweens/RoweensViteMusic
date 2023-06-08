import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCollectionList } from './userCollectionList';

export default {
    title: 'shared/UserCollectionList',
    component: UserCollectionList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserCollectionList>;

const Template: ComponentStory<typeof UserCollectionList> = (args) => (
    <UserCollectionList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
