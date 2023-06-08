import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistPagePlaylists } from './ArtistPagePlaylists';

export default {
    title: 'pages/ArtistPage/ArtistPagePlaylists',
    component: ArtistPagePlaylists,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistPagePlaylists>;

const Template: ComponentStory<typeof ArtistPagePlaylists> = (args) => (
    <ArtistPagePlaylists {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
