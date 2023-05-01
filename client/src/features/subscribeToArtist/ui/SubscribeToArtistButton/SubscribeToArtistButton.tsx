import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useLazyFetchArtist } from '../../api/subscribeToArtistApi';
import { removeArtistFromSubscriptions } from '../../model/services/removeArtistFromSubscriptions/removeArtistFromSubscriptions';
import { addArtistToSubscriptions } from '../../model/services/addArtistToSubscriptions/addArtistToSubscriptions';
import cls from './SubscribeToArtistButton.module.scss';

interface addToFavouriteButtonProps {
   className?: string;
   artistId?: string;
   onSubscribe?: () => void
}

export const SubscribeToArtistButton = memo((props:addToFavouriteButtonProps) => {
    const { className, artistId, onSubscribe } = props;
    const authData = useSelector(getUserAuthData);

    const [trigger, { isLoading, error, data: artist }] = useLazyFetchArtist();

    useInitialEffect(() => {
        trigger({ artistId, userId: authData?.id });
    });

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const onSubscribeHandle = useCallback(() => {
        dispatch(addArtistToSubscriptions({ artistId }))
            .then(() => {
                trigger({ artistId, userId: authData?.id });
                onSubscribe?.();
            });
    }, [artistId, authData?.id, dispatch, onSubscribe, trigger]);

    const onUnsubscribeHandle = useCallback(() => {
        dispatch(removeArtistFromSubscriptions({ artistId }))
            .then(() => {
                trigger({ artistId, userId: authData?.id });
                onSubscribe?.();
            });
    }, [artistId, authData?.id, dispatch, onSubscribe, trigger]);

    if (isLoading || error || !artist) {
        return <Skeleton width={100} height={30} />;
    }

    return (
        <>
            {artist?.favourite_artist.length ? (
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
