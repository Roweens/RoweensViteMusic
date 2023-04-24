import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addToFavouriteList } from '../../model/services/addTrackToFavouriteList/addTrackToFavouriteList';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import cls from './AddTrackToFavouriteButton.module.scss';
import { removeFromFavouriteList } from '../../model/services/removeTrackFromFavouriteList/removeTrackFromFavouriteList';

interface addToFavouriteButtonProps {
   className?: string;
   track?: Track
   onFavouriteChange?: () => void
}

export const AddTrackToFavouriteButton = memo((props:addToFavouriteButtonProps) => {
    const { className, track, onFavouriteChange } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onAddToFavouriteHandle = useCallback(() => {
        dispatch(addToFavouriteList({ trackId: String(track?.track.id) }))
            .then(() => {
                onFavouriteChange?.();
            });
    }, [dispatch, onFavouriteChange, track?.track.id]);

    const onRemoveFromFavouriteHandle = useCallback(() => {
        dispatch(removeFromFavouriteList({ trackId: String(track?.track.id) }))
            .then(() => {
                onFavouriteChange?.();
            });
    }, [dispatch, onFavouriteChange, track?.track.id]);

    if (!track) {
        return null;
    }

    return (
        <>
            {track.track.favourite_track.length ? (
                <Button
                    className={classNames(cls.addToFavouriteButton, {}, [className])}
                    theme={ButtonTheme.CLEAN}
                    onClick={onRemoveFromFavouriteHandle}
                >
                    <Icon Svg={HeartIcon} height={30} width={30} className={cls.unfavIcon} />
                </Button>
            ) : (
                <Button
                    className={classNames(cls.addToFavouriteButton, {}, [className])}
                    theme={ButtonTheme.CLEAN}
                    onClick={onAddToFavouriteHandle}
                >
                    <Icon Svg={HeartIcon} height={30} width={30} className={cls.favIcon} />
                </Button>
            )}

        </>
    );
});
