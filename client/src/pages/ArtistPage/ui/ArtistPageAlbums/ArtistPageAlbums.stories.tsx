import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistPageAlbums } from './ArtistPageAlbums';

export default {
    title: 'pages/ArtistPage/ArtistPageAlbums',
    component: ArtistPageAlbums,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistPageAlbums>;

const Template: ComponentStory<typeof ArtistPageAlbums> = (args) => (
    <ArtistPageAlbums {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
