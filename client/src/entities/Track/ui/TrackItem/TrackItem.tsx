import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Image } from 'shared/ui/Image/Image';
import { Text } from 'shared/ui/Text/Text';
import { Link } from 'shared/ui/Link/Link';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getPlayerPaused, getPlayerTrack, PauseButton, PlayButton,
} from 'widgets/Player';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { AddToFavouriteButton } from 'features/addToFavourite';
import cls from './TrackItem.module.scss';
import { Track } from '../../model/types/track';

interface TrackItemProps {
   className?: string;
   track?: Track;
   isLoading?: boolean;
   onFavouriteChange?: () => void
}

export const TrackItem = memo((props:TrackItemProps) => {
    const {
        className, track, isLoading, onFavouriteChange,
    } = props;
    const { t } = useTranslation();
    const currentTrack = useSelector(getPlayerTrack);
    const paused = useSelector(getPlayerPaused);

    if (isLoading) {
        return (
            <div className={classNames(cls.trackItem, {}, [className])}>
                <div className={cls.info}>
                    <div className={cls.image}>
                        <Skeleton width={50} height={50} border="20px" />
                    </div>
                    <Skeleton width={150} height={50} border="5px" />
                </div>
                <Skeleton width={200} height={50} className={cls.album} border="5px" />
                <Skeleton width={200} height={50} className={cls.listens} border="5px" />
                <Skeleton width={200} height={50} className={cls.time} border="5px" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.trackItem, {}, [className])}>
            <div className={cls.info}>
                {currentTrack?.id === track?.id && !paused ? <PauseButton /> : <PlayButton track={track} />}
                <div className={cls.image}>
                    {track?.album?.img && (
                        <Image
                            width={50}
                            height={50}
                            src={`${__STATIC_URL__}${track?.album.img}`}
                            squared
                        />
                    )}
                </div>
                <Text title={track?.track.name} text={track?.artist?.name} classname={cls.name} />
            </div>
            <Link to={`${RoutePath.album}${track?.album?.id}`} className={cls.album}>{track?.album?.title}</Link>
            <Text text={track?.track.listens} classname={cls.listens} />
            <AddToFavouriteButton track={track} onFavouriteChange={onFavouriteChange} />
            <Text text="минуты" classname={cls.time} />
        </div>
    );
});
