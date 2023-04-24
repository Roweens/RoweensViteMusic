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
    onFavouriteChange?: () => void
    onTrackPlay?: (track?: Track) => void;
     onTrackPause?: (track?: Track) => void;
}

export const TrackList = memo((props:TrackListProps) => {
    const {
        className, tracks, isLoading, error, onFavouriteChange, onTrackPause, onTrackPlay,
    } = props;

    return (
        <div className={classNames(cls.trackList, {}, [className])}>
            {tracks.map((track) => (
                <TrackItem
                    track={track}
                    isLoading={isLoading}
                    key={track.id}
                    onFavouriteChange={onFavouriteChange}
                    onTrackPause={onTrackPause}
                    onTrackPlay={onTrackPlay}
                />
            ))}
            {isLoading && (
                <div className={classNames(cls.trackList, {}, [className])}>
                    <TrackItem isLoading />
                    <TrackItem isLoading />
                    <TrackItem isLoading />
                </div>
            )}
        </div>
    );
});
