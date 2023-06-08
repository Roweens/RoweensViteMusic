import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistDetails } from './ArtistDetails';

export default {
    title: 'entities/Artist/ArtistDetails',
    component: ArtistDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistDetails>;

const Template: ComponentStory<typeof ArtistDetails> = (args) => (
    <ArtistDetails {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
