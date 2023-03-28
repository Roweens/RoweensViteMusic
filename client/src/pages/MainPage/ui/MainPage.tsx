import classNames from 'classnames';
import { Album, AlbumList } from 'entities/Album';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import cls from './MainPage.module.scss';

const albums = [
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],

    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
    {
        id: 1,
        artistId: 1,
        title: 'PaidProgramming2',
        description: 'Very cool album',
        img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
        date: new Date(),
        tracks: [1],
    },
] as Album[];

export const MainPage = memo(() => (
    <div className={classNames(cls.mainPage)}>
        <Page>
            <Text title="Примеры списка" />
            <AlbumList albums={albums} />
            <AlbumList albums={albums} />
            <AlbumList albums={albums} />
            <AlbumList albums={albums} />
            <AlbumList albums={albums} />
            <AlbumList albums={albums} />
        </Page>
    </div>
));
