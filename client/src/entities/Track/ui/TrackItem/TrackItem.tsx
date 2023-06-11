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
import cls from './TrackItem.module.scss';
import { Track } from '../../model/types/track';

interface TrackItemProps {
    className?: string;
    track?: Track;
    isLoading?: boolean;
    viewType?: ItemView;
    shortTitle?: boolean;
    onFavouriteChange?: () => void;
    onTrackPlay?: (track?: Track) => void;
    onTrackPause?: (track?: Track) => void;
}

export const TrackItem = memo((props: TrackItemProps) => {
    const {
        className,
        track,
        isLoading,
        onFavouriteChange,
        onTrackPause,
        onTrackPlay,
        viewType = 'full',
        shortTitle = false,
    } = props;
    const currentTrack = useSelector(getPlayerTrack);
    const paused = useSelector(getPlayerPaused);

    if (isLoading) {
        return (
            <div className={classNames(cls.trackItem, {}, [className])}>
                <HStack className={cls.info} gap="16" align="center">
                    <div className={cls.image}>
                        <Skeleton width={50} height={50} border="20px" />
                    </div>
                    <Skeleton width={150} height={50} border="5px" />
                </HStack>
                <Skeleton
                    width={200}
                    height={50}
                    className={cls.album}
                    border="5px"
                />
                <Skeleton
                    width={200}
                    height={50}
                    className={cls.listens}
                    border="5px"
                />
                <Skeleton
                    width={200}
                    height={50}
                    className={cls.time}
                    border="5px"
                />
            </div>
        );
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
            <div className={classNames(cls.trackItemCompact, {}, [className])}>
                <HStack className={cls.info} gap="16" align="center">
                    {currentTrack?.id === track?.id && !paused ? (
                        <PauseButton onPause={onTrackPause} track={track} />
                    ) : (
                        <PlayButton onPlay={onTrackPlay} track={track} />
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
        <div className={classNames(cls.trackItem, {}, [className])}>
            <HStack className={cls.info} gap="16" align="center">
                {currentTrack?.id === track?.id && !paused ? (
                    <PauseButton onPause={onTrackPause} track={track} />
                ) : (
                    <PlayButton onPlay={onTrackPlay} track={track} />
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
