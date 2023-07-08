import { memo } from 'react';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    DynamicReducerLoader,
    ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Link } from 'shared/ui/Link/Link';
import { RoutePath } from 'shared/const/router';
import { AppImage } from 'shared/ui/AppImage';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card/Card';
import {
    getAlbumData,
    getAlbumIsLoading,
} from '../../model/selectors/getAlbumData';
import { albumReducer } from '../../model/slice/albumSlice';
import cls from './AlbumDetails.module.scss';
import { fetchAlbumById } from '../../model/services/fetchAlbumById';
import defaultAlbum from '../../assets/defaultAlbum.jpeg';

interface AlbumDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    album: albumReducer,
};

export const AlbumDetails = memo((props: AlbumDetailsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const album = useSelector(getAlbumData);
    const isLoading = useSelector(getAlbumIsLoading);

    useInitialEffect(() => {
        dispatch(fetchAlbumById(id));
    });

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            {isLoading ? (
                <Card
                    className={classNames(cls.albumDetails, {}, [className])}
                    fullWidth
                    withHoverEffect={false}
                >
                    <HStack
                        className={classNames(cls.albumDetails, {}, [
                            className,
                        ])}
                        gap="32"
                        max
                    >
                        <Skeleton width={250} height={250} border="15px" />
                        <VStack gap="16">
                            <VStack gap="16">
                                <Skeleton
                                    width={100}
                                    height={24}
                                    className={cls.type}
                                />
                                <Skeleton
                                    width={250}
                                    height={32}
                                    className={cls.title}
                                />
                                <Skeleton
                                    width={100}
                                    height={24}
                                    className={cls.bio}
                                />
                            </VStack>
                            <div className={cls.additional}>
                                <Skeleton
                                    width={40}
                                    height={40}
                                    className={cls.type}
                                    border="50%"
                                />
                                <Skeleton
                                    width={70}
                                    height={24}
                                    className={cls.type}
                                />
                                <Skeleton
                                    width={70}
                                    height={24}
                                    className={cls.type}
                                />
                                <Skeleton
                                    width={70}
                                    height={24}
                                    className={cls.type}
                                />
                            </div>
                        </VStack>
                    </HStack>
                </Card>
            ) : (
                <Card fullWidth withHoverEffect={false} padding="24">
                    <HStack
                        className={classNames(cls.albumDetails, {}, [
                            className,
                        ])}
                        data-testid="AlbumDetails"
                        gap="32"
                        max
                    >
                        <AppImage
                            src={
                                `${__STATIC_URL__}${album?.img}` || defaultAlbum
                            }
                            width={250}
                            height={250}
                            squared
                            errorFallback={
                                <Skeleton
                                    width={250}
                                    height={250}
                                    border="50%"
                                />
                            }
                            fallback={
                                <Skeleton
                                    width={250}
                                    height={250}
                                    border="50%"
                                />
                            }
                        />
                        <VStack gap="16">
                            <VStack gap="16">
                                <Text
                                    title={t('Альбом')}
                                    classname={cls.type}
                                />
                                <h2 className={cls.title}>{album?.title}</h2>
                                <Text
                                    classname={cls.bio}
                                    text={album?.description}
                                />
                            </VStack>

                            <div className={cls.additional}>
                                <AppImage
                                    src={
                                        `${__STATIC_URL__}${album?.artist.img}` ||
                                        defaultAlbum
                                    }
                                    width={40}
                                    height={40}
                                    cover
                                    errorFallback={
                                        <Skeleton
                                            width={40}
                                            height={40}
                                            border="50%"
                                        />
                                    }
                                    fallback={
                                        <Skeleton
                                            width={40}
                                            height={40}
                                            border="50%"
                                        />
                                    }
                                />

                                <Link
                                    to={`${RoutePath.artist}${album?.artist.id}`}
                                >
                                    <Text
                                        title={album?.artist.name}
                                        bold
                                        size={TextSize.S}
                                    />
                                </Link>
                                <Text
                                    text={`${album?.album_tracks.length} треков`}
                                />
                                <Text text={album?.date} />
                            </div>
                        </VStack>
                    </HStack>
                </Card>
            )}
        </DynamicReducerLoader>
    );
});
