import { memo } from 'react';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { Link } from 'shared/ui/Link/Link';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ItemView } from 'shared/types/ItemView';
import {
    getPlayerPaused,
    getPlayerTrack,
    PauseButton,
    PlayButton,
} from 'widgets/Player';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/const/router';
import { AddTrackToFavouriteButton } from 'features/addTrackToFavourite';
import { AppImage } from 'shared/ui/AppImage';
import { formatAudioDuration } from 'shared/lib/utils/formatAudioDuration';
import { HStack } from 'shared/ui/Stack';
import { Track } from 'entities/Track';
import cls from './TrackItem.module.scss';
import { TrackItemSkeleton } from './TrackItemSkeleton';

interface TrackItemProps {
    className?: string;
    track?: Track;
    isLoading?: boolean;
    viewType?: ItemView;
    shortTitle?: boolean;
    onFavouriteChange?: () => void;
}

export const TrackItem = memo((props: TrackItemProps) => {
    const {
        className,
        track,
        isLoading,
        onFavouriteChange,
        viewType = 'full',
        shortTitle = false,
    } = props;
    const currentTrack = useSelector(getPlayerTrack);
    const paused = useSelector(getPlayerPaused);

    if (!track) {
        return null;
    }

    if (isLoading) {
        return <TrackItemSkeleton viewType={viewType} />;
    }

    if (viewType === 'mini') {
        return (
            <div className={classNames(cls.trackItemMini, {}, [className])}>
                <div className={cls.image}>
                    {track?.album?.img && (
                        <AppImage
                            src={`${__STATIC_URL__}${track?.album.img}`}
                            width={50}
                            height={50}
                            squared
                            fallback={
                                <Skeleton width={50} height={50} border="5px" />
                            }
                        />
                    )}
                </div>
            </div>
        );
    }

    if (viewType === 'compact') {
        return (
            <div
                className={classNames(cls.trackItemCompact, {}, [className])}
                data-testid="TrackItemCompact"
            >
                <HStack className={cls.info} gap="16" align="center">
                    {currentTrack?.id === track?.id && !paused ? (
                        <PauseButton track={track} />
                    ) : (
                        <PlayButton track={track} />
                    )}

                    {track?.album?.img && (
                        <AppImage
                            src={`${__STATIC_URL__}${track?.album.img}`}
                            width={50}
                            height={50}
                            squared
                            fallback={
                                <Skeleton width={50} height={50} border="5px" />
                            }
                        />
                    )}

                    <Text
                        title={track?.track.name}
                        text={track?.artist?.name}
                        classname={classNames(
                            cls.name,
                            { [cls.shortTitle]: shortTitle },
                            [],
                        )}
                    />
                </HStack>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.trackItem, {}, [className])}
            data-testid="TrackItemFull"
        >
            <HStack className={cls.info} gap="16" align="center">
                {currentTrack?.id === track?.id && !paused ? (
                    <PauseButton track={track} />
                ) : (
                    <PlayButton track={track} />
                )}
                <div className={cls.image}>
                    {track?.album?.img && (
                        <AppImage
                            src={`${__STATIC_URL__}${track?.album.img}`}
                            width={50}
                            height={50}
                            squared
                            fallback={
                                <Skeleton width={50} height={50} border="5px" />
                            }
                        />
                    )}
                </div>
                <Text
                    title={track?.track.name}
                    text={track?.artist?.name}
                    classname={cls.name}
                />
            </HStack>
            <Link
                to={`${RoutePath.album}${track?.album?.id}`}
                className={cls.album}
            >
                {track?.album?.title}
            </Link>
            <Text text={track?.track.listens} classname={cls.listens} />
            <AddTrackToFavouriteButton
                track={track}
                onFavouriteChange={onFavouriteChange}
            />
            <Text
                text={
                    track?.track.length
                        ? formatAudioDuration(track?.track.length)
                        : '00:00'
                }
                classname={cls.time}
            />
        </div>
    );
});
