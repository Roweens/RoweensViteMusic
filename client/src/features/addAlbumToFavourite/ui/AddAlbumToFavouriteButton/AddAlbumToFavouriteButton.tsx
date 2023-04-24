import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Album } from 'entities/Album';
import { Text } from 'shared/ui/Text/Text';
import cls from './AddAlbumToFavouriteButton.module.scss';
import { addAlbumToFavouriteList } from '../../model/services/addAlbumToFavouriteList/addAlbumToFavouriteList';
import { removeAlbumFromFavouriteList } from '../../model/services/removeAlbumFromFavouriteList/removeAlbumFromFavouriteList';

interface addAlbumToFavouriteButtonProps {
   className?: string;
   album?: Album
   onFavouriteChange?: () => void
}

export const AddAlbumToFavouriteButton = memo((props:addAlbumToFavouriteButtonProps) => {
    const { className, album, onFavouriteChange } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onAddAlbumToFavouriteHandle = useCallback(() => {
        dispatch(addAlbumToFavouriteList({ albumId: String(album?.id) }))
            .then(() => {
                onFavouriteChange?.();
            });
    }, [album?.id, dispatch, onFavouriteChange]);

    const onRemoveAlbumFromFavouriteHandle = useCallback(() => {
        dispatch(removeAlbumFromFavouriteList({ albumId: String(album?.id) }))
            .then(() => {
                onFavouriteChange?.();
            });
    }, [album?.id, dispatch, onFavouriteChange]);

    if (!album) {
        return null;
    }

    return (
        <>
            {album.favourite_album.length ? (
                <Button
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.FILLED}
                    onClick={onRemoveAlbumFromFavouriteHandle}
                >
                    <Text text={t('В избранном')} />
                </Button>
            ) : (
                <Button
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.FILLED}
                    onClick={onAddAlbumToFavouriteHandle}
                >
                    <Text text={t('Добавить в избранное')} />
                </Button>
            )}

        </>
    );
});
