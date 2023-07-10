import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicReducerLoader,
    ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { AppImage } from 'shared/ui/AppImage';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    getArtistData,
    getArtistIsLoading,
} from '../../model/selectors/getArtistData';
import { fetchArtistById } from '../../model/services/fetchArtistById/fetchArtistById';
import { artistReducer } from '../../model/slice/artistSlice';

import cls from './ArtistDetails.module.scss';

interface ArtistDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    artist: artistReducer,
};

export const ArtistDetails = memo((props: ArtistDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('artist');
    const dispatch = useAppDispatch();
    const artist = useSelector(getArtistData);
    const isLoading = useSelector(getArtistIsLoading);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchArtistById({ artistId: id }));
        }
    });

    return (
        <DynamicReducerLoader reducers={reducers}>
            {isLoading ? (
                <div className={classNames(cls.artistDetails, {}, [className])}>
                    <Skeleton width="100%" height="400px" className={cls.img} />
                    <VStack className={cls.info} gap="32">
                        <Skeleton
                            className={cls.name}
                            width={320}
                            height={70}
                            border="7px"
                        />
                        <Skeleton width={210} height={50} border="10px" />
                    </VStack>
                </div>
            ) : (
                <div
                    className={classNames(cls.artistDetails, {}, [className])}
                    data-testid="ArtistDetails"
                >
                    {artist?.img && (
                        <AppImage
                            src={`${__STATIC_URL__}${artist?.img}`}
                            width="100%"
                            height="400px"
                            className={cls.img}
                            squared
                            cover
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height="400px"
                                    border="5px"
                                />
                            }
                        />
                    )}
                    <VStack className={cls.info} gap="32">
                        <h5 className={cls.name}>{artist?.name}</h5>
                        <Text
                            text={t('{{count}} прослушиваний за все время', {
                                count: Number(artist?.listens),
                            })}
                        />
                    </VStack>
                </div>
            )}
        </DynamicReducerLoader>
    );
});
