import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Artist } from 'entities/Artist';
import { Text } from 'shared/ui/Text/Text';
import { removeArtistFromSubscriptions } from '../../model/services/removeArtistFromSubscriptions/removeArtistFromSubscriptions';
import { addArtistToSubscriptions } from '../../model/services/addArtistToSubscriptions/addArtistToSubscriptions';
import cls from './SubscribeToArtistButton.module.scss';

interface addToFavouriteButtonProps {
   className?: string;
   artist?: Artist
   onSubscribe?: () => void
}

export const SubscribeToArtistButton = memo((props:addToFavouriteButtonProps) => {
    const { className, artist, onSubscribe } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const onSubscribeHandle = useCallback(() => {
        dispatch(addArtistToSubscriptions({ artistId: String(artist?.id) }))
            .then(() => {
                onSubscribe?.();
            });
    }, [artist?.id, dispatch, onSubscribe]);

    const onUnsubscribeHandle = useCallback(() => {
        dispatch(removeArtistFromSubscriptions({ artistId: String(artist?.id) }))
            .then(() => {
                onSubscribe?.();
            });
    }, [artist?.id, dispatch, onSubscribe]);

    if (!artist) {
        return null;
    }

    return (
        <>
            {artist.favourite_artist.length ? (
                <Button
                    className={classNames(cls.addToFavouriteButton, {}, [className])}
                    theme={ButtonTheme.OUTLINED}
                    onClick={onUnsubscribeHandle}
                >
                    <Text text={t('Вы подписаны')} />
                </Button>
            ) : (
                <Button
                    className={classNames(cls.addToFavouriteButton, {}, [className])}
                    theme={ButtonTheme.FILLED}
                    onClick={onSubscribeHandle}
                >
                    <Text text={t('Подписаться')} />
                </Button>
            )}

        </>
    );
});
