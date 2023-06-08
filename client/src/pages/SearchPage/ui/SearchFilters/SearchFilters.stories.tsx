import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFilters } from './SearchFilters';

export default {
    title: 'shared/SearchFilters',
    component: SearchFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchFilters>;

const Template: ComponentStory<typeof SearchFilters> = (args) => (
    <SearchFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
