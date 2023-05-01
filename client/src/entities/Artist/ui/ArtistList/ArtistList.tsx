import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Artist } from '../../model/types/artist';
import cls from './ArtistList.module.scss';
import { ArtistItem } from '../ArtistItem/ArtistItem';

interface ArtistListProps {
   className?: string;
   artists: Artist[]
    isLoading: boolean
}

export const ArtistList = memo((props:ArtistListProps) => {
    const { className, artists, isLoading } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.artistList, {}, [className])}>
            {artists.map((artist) => <ArtistItem artist={artist} />)}
        </div>
    );
});
