import { memo } from 'react';
import classNames from 'classnames';
import cls from './TrackList.module.scss';
import { Track } from '../../model/types/track';
import { TrackItem } from '../TrackItem/TrackItem';

interface TrackListProps {
   className?: string;
   tracks: Track[];
   isLoading?: boolean
error?:string
}

export const TrackList = memo((props:TrackListProps) => {
    const {
        className, tracks, isLoading, error,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.trackList, {}, [className])}>
                <TrackItem isLoading />
                <TrackItem isLoading />
                <TrackItem isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.trackList, {}, [className])}>
            {tracks.map((track) => <TrackItem track={track} isLoading={isLoading} key={track.id} />)}
        </div>
    );
});
