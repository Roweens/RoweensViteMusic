import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrackSortSelector } from './TrackSortSelector';

export default {
    title: 'entities/Track/TrackSortSelector',
    component: TrackSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrackSortSelector>;

const Template: ComponentStory<typeof TrackSortSelector> = (args) => (
    <TrackSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
