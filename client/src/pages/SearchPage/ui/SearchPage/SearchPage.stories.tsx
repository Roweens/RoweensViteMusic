import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchPage } from './SearchPage';

export default {
    title: 'shared/SearchPage',
    component: SearchPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = (args) => (
    <SearchPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
