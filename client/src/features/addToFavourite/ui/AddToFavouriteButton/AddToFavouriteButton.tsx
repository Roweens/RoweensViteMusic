import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addToFavouriteList } from 'features/addToFavourite/model/services/addToFavouriteList/addToFavouriteList';
import { removeFromFavouriteList } from 'features/addToFavourite/model/services/removeFromFavouriteList/removeFromFavouriteList';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import cls from './AddToFavouriteButton.module.scss';

interface addToFavouriteButtonProps {
   className?: string;
   track?: Track
   onFavouriteChange?: () => void
}

export const AddToFavouriteButton = memo((props:addToFavouriteButtonProps) => {
    const { className, track, onFavouriteChange } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onAddToFavouriteHandle = useCallback(() => {
        dispatch(addToFavouriteList({ trackId: String(track?.track.id) }));
        onFavouriteChange?.();
    }, [dispatch, onFavouriteChange, track?.track.id]);

    const onRemoveFromFavouriteHandle = useCallback(() => {
        dispatch(removeFromFavouriteList({ trackId: String(track?.track.id) }));
        onFavouriteChange?.();
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
