import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrackItem } from './TrackItem';

export default {
    title: 'entities/Track/TrackItem',
    component: TrackItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrackItem>;

const Template: ComponentStory<typeof TrackItem> = (args) => (
    <TrackItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
