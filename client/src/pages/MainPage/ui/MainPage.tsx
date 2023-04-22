import classNames from 'classnames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import cls from './MainPage.module.scss';
import { MainPageAlbumsByGenre } from './MainPageAlbumsByGenre/MainPageAlbumsByGenre';

// const albums = [
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],

//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
//     {
//         id: 1,
//         artistId: 1,
//         title: 'PaidProgramming2',
//         description: 'Very cool album',
//         img: 'https://i.scdn.co/image/ab67616d0000b273eeeb8050799b61bf58df30bb',
//         date: new Date(),
//         tracks: [1],
//     },
// ] as Album[];

export const MainPage = memo(() => (
    <Page className={classNames(cls.mainPage)}>
        <MainPageAlbumsByGenre />
    </Page>
));
