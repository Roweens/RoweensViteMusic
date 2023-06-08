import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GenreSelector } from './GenreSelector';

export default {
    title: 'entities/Genre/GenreSelector',
    component: GenreSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof GenreSelector>;

const Template: ComponentStory<typeof GenreSelector> = (args) => (
    <GenreSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
