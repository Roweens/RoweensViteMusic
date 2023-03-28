import { memo } from 'react';
import classNames from 'classnames';
import cls from './AlbumList.module.scss';
import { Album } from '../../model/types/album';
import { AlbumCard } from '../AlbumCard/AlbumCard';

interface AlbumListProps {
   className?: string;
   albums: Album[]
}

export const AlbumList = memo((props:AlbumListProps) => {
    const { className, albums } = props;

    return (
        <div className={classNames(cls.albumList, {}, [className])}>
            {albums.map((album) => <AlbumCard album={album} />)}
        </div>
    );
});
