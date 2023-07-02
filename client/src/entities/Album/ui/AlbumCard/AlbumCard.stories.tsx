import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { AlbumCard } from './AlbumCard';
import { Album, AlbumCategory } from '../../model/types/album';

export default {
    title: 'entities/Album/AlbumCard',
    component: AlbumCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumCard>;

const Template: ComponentStory<typeof AlbumCard> = (args) => (
    <AlbumCard {...args} />
);

const testAlbum: Album = {
    id: 2,
    title: 'IFeelLikeDirt',
    description: 'New Album',
    category: AlbumCategory.ALBUM,
    img: 'IFeelLikeDirt.jpg',
    date: '30.09.2019',
    createdAt: '2023-02-02T14:39:34.925Z',
    updatedAt: '2023-02-02T14:39:34.925Z',
    artistId: 1,
    genreId: 1,
    artist: {
        id: 1,
        name: 'Bones',
        bio: "Somewhere between emo rap and an almost goth aesthetic, Bones crafts his dark and tormented vision of rap. The prolific artist independently produced dozens of releases under various monikers, developing a devoted fan base around his emotionally heavy output as Bones. Mixtapes like 2014's Rotten and TeenWitch exposed new fans to the rapper's style that swung between angsty rap flows and emo singing. Bones was born Elmo Kennedy O'Connor in Muir Beach, California in 1994. When he was seven, his family relocated to Howell, Michigan. The culture shock of going from a sunny Californian environment to a remote and somewhat backwoods Midwestern town had a marked effect on O'Connor. Being surrounded by racist classmates and beaten up by older kids were events he would later reference in interviews about the seeds that led to the depressing outlook a lot of his music took on. He began experimenting with making music when he was just nine years old and by his teenage years he was releasing music online under the name Th@ Kid. When he was 16, he dropped out of school and moved to Los Angeles. Connecting with similarly minded artists like Xavier Wulf and Chris Travis, O'Connor took on the Bones moniker in 2012 and immediately began releasing a slew of new music.",
        bioImg: 'Bones.jpg',
        label: 'TeamSesh',
        listens: '123124',
        img: 'Bones.jpg',
        createdAt: '2023-02-02T14:39:34.925Z',
        updatedAt: '2023-02-02T14:39:34.925Z',
        favourite_artist: [
            {
                id: '8',
                favouriteId: '1',
                artistId: '1',
            },
        ],
    },
    album_tracks: [
        {
            id: 6,
            createdAt: '2023-03-02T14:40:34.925Z',
            updatedAt: '2023-03-02T14:40:34.925Z',
            albumId: 2,
            trackId: 4,
            artistId: 1,
        },
        {
            id: 7,
            createdAt: '2023-03-02T14:40:34.925Z',
            updatedAt: '2023-03-02T14:40:34.925Z',
            albumId: 2,
            trackId: 4,
            artistId: 1,
        },
    ],
    favourite_album: [
        {
            id: '5',
            favouriteId: '1',
            albumId: '2',
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {
    album: testAlbum,
};

export const Dark = Template.bind({});
Dark.args = {
    album: testAlbum,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const Compact = Template.bind({});
Compact.args = {
    album: testAlbum,
    viewType: 'compact',
};

export const CompactDark = Template.bind({});
CompactDark.args = {
    album: testAlbum,
    viewType: 'compact',
};
CompactDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Mini = Template.bind({});
Mini.args = {
    album: testAlbum,
    viewType: 'mini',
};

export const MiniDark = Template.bind({});
MiniDark.args = {
    album: testAlbum,
    viewType: 'mini',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
