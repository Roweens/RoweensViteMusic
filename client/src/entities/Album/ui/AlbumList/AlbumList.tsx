import { memo } from 'react';
import classNames from 'classnames';
import cls from './AlbumList.module.scss';
import { Album } from '../../model/types/album';
import { AlbumCard } from '../AlbumCard/AlbumCard';
import { AlbumCardSkeleton } from '../AlbumCardSkeleton/AlbumCardSkeleton';

interface AlbumListProps {
   className?: string;
   isLoading?: boolean
   albums: Album[]
}

const skeletons = () => new Array(5).fill(0).map(() => <AlbumCardSkeleton />);

export const AlbumList = memo((props:AlbumListProps) => {
    const { className, albums, isLoading } = props;

    return (
        <div className={classNames(cls.albumList, {}, [className])}>
            {isLoading ? (skeletons()) : (albums.map((album) => <AlbumCard album={album} />))}
        </div>
    );
});
