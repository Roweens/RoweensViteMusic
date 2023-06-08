import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchPageList } from './SearchPageList';

export default {
    title: 'shared/SearchPageList',
    component: SearchPageList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchPageList>;

const Template: ComponentStory<typeof SearchPageList> = (args) => (
    <SearchPageList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
