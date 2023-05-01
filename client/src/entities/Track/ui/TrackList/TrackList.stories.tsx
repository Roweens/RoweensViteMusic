import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrackList } from './TrackList';

export default {
    title: 'entities/Track/TrackList',
    component: TrackList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrackList>;

const Template: ComponentStory<typeof TrackList> = (args) => <TrackList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
