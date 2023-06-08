import { memo } from 'react';
import classNames from 'classnames';
import { ItemView } from 'shared/types/ItemView';
import { VStack } from 'shared/ui/Stack';
import cls from './TrackList.module.scss';
import { Track } from '../../model/types/track';
import { TrackItem } from '../TrackItem/TrackItem';

interface TrackListProps {
    className?: string;
    tracks: Track[];
    isLoading?: boolean;
    error?: string;
    onFavouriteChange?: () => void;
    onTrackPlay?: (track?: Track) => void;
    onTrackPause?: (track?: Track) => void;
    viewType?: ItemView;
    shortTitle?: boolean;
}

export const TrackList = memo((props: TrackListProps) => {
    const {
        className,
        tracks,
        isLoading,
        error,
        onFavouriteChange,
        onTrackPause,
        onTrackPlay,
        viewType = 'full',
        shortTitle = false,
    } = props;

    return (
        <VStack
            className={classNames(cls.trackList, {}, [className])}
            gap="16"
            max
        >
            {tracks.map((track) => (
                <TrackItem
                    track={track}
                    isLoading={isLoading}
                    key={track.id}
                    onFavouriteChange={onFavouriteChange}
                    onTrackPause={onTrackPause}
                    onTrackPlay={onTrackPlay}
                    viewType={viewType}
                    shortTitle={shortTitle}
                />
            ))}
            {isLoading && (
                <div className={classNames(cls.trackList, {}, [className])}>
                    <TrackItem isLoading />
                    <TrackItem isLoading />
                    <TrackItem isLoading />
                </div>
            )}
        </VStack>
    );
});
