import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { Artist } from '../../model/types/artist';
import { ArtistItem } from './ArtistItem';

export default {
    title: 'entities/Artist/ArtistItem',
    component: ArtistItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistItem>;

const Template: ComponentStory<typeof ArtistItem> = (args) => (
    <ArtistItem {...args} />
);

const testArtist: Artist = {
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
};

export const Normal = Template.bind({});
Normal.args = {
    artist: testArtist,
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    artist: testArtist,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

export const Compact = Template.bind({});
Compact.args = {
    artist: testArtist,
    viewType: 'compact',
};
Compact.decorators = [StoreDecorator({})];

export const CompactDark = Template.bind({});
CompactDark.args = {
    artist: testArtist,
    viewType: 'compact',
};
CompactDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

export const Mini = Template.bind({});
Mini.args = {
    artist: testArtist,
    viewType: 'mini',
};
Mini.decorators = [StoreDecorator({})];

export const MiniDark = Template.bind({});
MiniDark.args = {
    artist: testArtist,
    viewType: 'mini',
};
MiniDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
