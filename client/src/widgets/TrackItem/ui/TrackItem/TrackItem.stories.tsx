import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { AlbumCategory } from '../../../entities/Album';
import { Track } from '../../entities/Track/model/types/track';
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

const testTrack: Track = {
    id: 6,
    trackId: 4,
    track: {
        date: '20.10.2021',
        favourite_track: [
            {
                favouriteId: 1,
                id: 22,
                trackId: 4,
            },
        ],
        file: 'airplanemode.mp3',
        id: 4,
        length: 75,
        listens: '124124',
        name: 'AirplaneMode',
        text: 'Track',
    },
    artistId: 1,
    artist: {
        bio: "Somewhere between emo rap and an almost goth aesthetic, Bones crafts his dark and tormented vision of rap. The prolific artist independently produced dozens of releases under various monikers, developing a devoted fan base around his emotionally heavy output as Bones. Mixtapes like 2014's Rotten and TeenWitch exposed new fans to the rapper's style that swung between angsty rap flows and emo singing.\n\nBones was born Elmo Kennedy O'Connor in Muir Beach, California in 1994. When he was seven, his family relocated to Howell, Michigan. The culture shock of going from a sunny Californian environment to a remote and somewhat backwoods Midwestern town had a marked effect on O'Connor. Being surrounded by racist classmates and beaten up by older kids were events he would later reference in interviews about the seeds that led to the depressing outlook a lot of his music took on. He began experimenting with making music when he was just nine years old and by his teenage years he was releasing music online under the name Th@ Kid. When he was 16, he dropped out of school and moved to Los Angeles. Connecting with similarly minded artists like Xavier Wulf and Chris Travis, O'Connor took on the Bones moniker in 2012 and immediately began releasing a slew of new music.",
        bioImg: 'Bones.jpg',
        createdAt: '2023-02-02T14:39:34.925Z',
        id: 1,
        img: 'Bones.jpg',
        label: 'TeamSesh',
        listens: '123124',
        name: 'Bones',
        updatedAt: '2023-02-02T14:39:34.925Z',
    },
    albumId: 2,
    album: {
        artistId: 1,
        category: AlbumCategory.ALBUM,
        createdAt: '2023-02-02T14:39:34.925Z',
        date: '30.09.2019',
        description: 'New Album',
        genreId: 1,
        id: 2,
        img: 'IFeelLikeDirt.jpg',
        title: 'IFeelLikeDirt',
        updatedAt: '2023-02-02T14:39:34.925Z',
    },
    createdAt: '2023-03-02T14:40:34.925Z',
    updatedAt: '2023-03-02T14:40:34.925Z',
} as Track;

export const Normal = Template.bind({});
Normal.args = {
    track: testTrack,
};
Normal.decorators = [StoreDecorator({})];

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = {
    track: testTrack,
    isLoading: true,
};
NormalIsLoading.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    track: testTrack,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    track: testTrack,
    isLoading: true,
};
DarkIsLoading.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

export const Compact = Template.bind({});
Compact.args = {
    track: testTrack,
    viewType: 'compact',
};
Compact.decorators = [StoreDecorator({})];

export const CompactIsLoading = Template.bind({});
CompactIsLoading.args = {
    track: testTrack,
    viewType: 'compact',
    isLoading: true,
};
CompactIsLoading.decorators = [StoreDecorator({})];

export const CompactDark = Template.bind({});
CompactDark.args = {
    track: testTrack,
    viewType: 'compact',
};
CompactDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

export const CompactDarkIsLoading = Template.bind({});
CompactDarkIsLoading.args = {
    track: testTrack,
    viewType: 'compact',
    isLoading: true,
};
CompactDarkIsLoading.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Themes.DARK),
];

export const Mini = Template.bind({});
Mini.args = {
    track: testTrack,
    viewType: 'mini',
};
Mini.decorators = [StoreDecorator({})];

export const MiniIsLoading = Template.bind({});
MiniIsLoading.args = {
    track: testTrack,
    viewType: 'mini',
    isLoading: true,
};
MiniIsLoading.decorators = [StoreDecorator({})];

export const MiniDark = Template.bind({});
MiniDark.args = {
    track: testTrack,
    viewType: 'mini',
};
MiniDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

export const MiniDarkIsLoading = Template.bind({});
MiniDarkIsLoading.args = {
    track: testTrack,
    viewType: 'mini',
    isLoading: true,
};
MiniDarkIsLoading.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Themes.DARK),
];
