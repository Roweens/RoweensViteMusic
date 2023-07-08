import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { addAlbumToFavouriteList } from '../../model/services/addAlbumToFavouriteList/addAlbumToFavouriteList';
import { removeAlbumFromFavouriteList } from '../../model/services/removeAlbumFromFavouriteList/removeAlbumFromFavouriteList';
import { useLazyFetchAlbum } from '../../api/addAlbumToFavouriteApi';

interface addAlbumToFavouriteButtonProps {
    className?: string;
    albumId?: string;
    onFavouriteChange?: () => void;
}

export const AddAlbumToFavouriteButton = memo(
    (props: addAlbumToFavouriteButtonProps) => {
        const { className, albumId, onFavouriteChange } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const authData = useSelector(getUserAuthData);

        const [trigger, { isLoading, error, data: album }] =
            useLazyFetchAlbum();

        useInitialEffect(() => {
            trigger({ albumId, userId: authData?.id });
        });

        const onAddAlbumToFavouriteHandle = useCallback(() => {
            dispatch(addAlbumToFavouriteList({ albumId })).then(() => {
                trigger({ albumId, userId: authData?.id });
                onFavouriteChange?.();
            });
        }, [albumId, authData?.id, dispatch, onFavouriteChange, trigger]);

        const onRemoveAlbumFromFavouriteHandle = useCallback(() => {
            dispatch(removeAlbumFromFavouriteList({ albumId })).then(() => {
                trigger({ albumId, userId: authData?.id });
                onFavouriteChange?.();
            });
        }, [albumId, authData?.id, dispatch, onFavouriteChange, trigger]);

        if (isLoading || error || !album) {
            return <Skeleton width={100} height={30} />;
        }

        return (
            <>
                {album?.favourite_album.length ? (
                    <Button
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onRemoveAlbumFromFavouriteHandle}
                        data-testid="RemoveAlbumFromFavButton"
                    >
                        <Text title={t('В избранном')} size={TextSize.S} />
                    </Button>
                ) : (
                    <Button
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.FILLED}
                        onClick={onAddAlbumToFavouriteHandle}
                        data-testid="AddAlbumToFavButton"
                    >
                        <Text
                            title={t('Добавить в избранное')}
                            size={TextSize.S}
                        />
                    </Button>
                )}
            </>
        );
    },
);
