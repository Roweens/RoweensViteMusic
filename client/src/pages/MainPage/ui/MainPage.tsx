import classNames from 'classnames';
import { Album, AlbumList } from 'entities/Album';
import { memo, useState } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { GenreSelector } from 'entities/Genre';
import { Selector } from 'shared/ui/Selector/Selector';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { OptionsType } from 'shared/types/OptionsType';
import { Link } from 'shared/ui/Link/Link';
import { DropDown, DropdownItem, ThemeDropDown } from 'shared/ui/DropDown/DropDown';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './MainPage.module.scss';
import { MainPageAlbumsByGenre } from './MainPageAlbumsByGenre/MainPageAlbumsByGenre';

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

export const MainPage = memo(() => {
    const [value, setValue] = useState('');

    const options: OptionsType[] = [
        {
            id: 1, label: 'Label 1', value: 'Value 1', disabled: false,
        },
        {
            id: 2, label: 'Label 2', value: 'Value 2', disabled: true,
        },
        {
            id: 3, label: 'Label 3', value: 'Value 3', disabled: false,
        },
    ];
    const valuesArray: DropdownItem[] = [
        {
            id: 1,
            content: 'Button item',
            disabled: false,
        },
        {
            id: 2,
            content: 'Button item',
            disabled: true,
        },
        {
            id: 3,
            content: 'Link item',
            disabled: false,
            href: '#',
        },
    ];

    return (
        <div className={classNames(cls.mainPage)}>
            <Page>
                <MainPageAlbumsByGenre />
            </Page>
        </div>
    );
});
