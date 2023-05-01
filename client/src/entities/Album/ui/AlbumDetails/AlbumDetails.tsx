import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Image } from 'shared/ui/Image/Image';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Link } from 'shared/ui/Link/Link';
import { RoutePath } from 'shared/const/router';
import { getAlbumData, getAlbumIsLoading } from '../../model/selectors/getAlbumData';
import { albumReducer } from '../../model/slice/albumSlice';
import cls from './AlbumDetails.module.scss';
import { fetchAlbumById } from '../../model/services/fetchAlbumById';
import defaultAlbum from '../../assets/defaultAlbum.jpeg';

interface AlbumDetailsProps {
   className?: string;
   id: string
}

const reducers: ReducersList = {
    album: albumReducer,
};

export const AlbumDetails = memo((props:AlbumDetailsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const album = useSelector(getAlbumData);
    const isLoading = useSelector(getAlbumIsLoading);

    useEffect(() => {
        dispatch(fetchAlbumById(id));
    }, [dispatch, id]);

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            {
                isLoading ? (
                    <div className={classNames(cls.albumDetails, {}, [className])}>
                        <Skeleton width={250} height={250} border="15px" />
                        <div className={cls.info}>
                            <div className={cls.titleWrapper}>
                                <Skeleton width={100} height={24} className={cls.type} />
                                <Skeleton width={250} height={32} className={cls.title} />
                                <Skeleton width={100} height={24} className={cls.bio} />
                            </div>
                            <div className={cls.additional}>
                                <Skeleton width={40} height={40} className={cls.type} border="50%" />
                                <Skeleton width={70} height={24} className={cls.type} />
                                <Skeleton width={70} height={24} className={cls.type} />
                                <Skeleton width={70} height={24} className={cls.type} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={classNames(cls.albumDetails, {}, [className])}>
                        <Image
                            src={`${__STATIC_URL__}${album?.img}` || defaultAlbum}
                            squared
                            width={250}
                            height={250}
                        />
                        <div className={cls.info}>
                            <div className={cls.titleWrapper}>
                                <Text text="Альбом" classname={cls.type} bold />
                                <h2 className={cls.title}>{album?.title}</h2>
                            </div>
                            <Text classname={cls.bio} text={album?.description} />
                            <div className={cls.additional}>
                                <Image
                                    src={`${__STATIC_URL__}${album?.artist.img}` || defaultAlbum}
                                    width={40}
                                    height={40}
                                />

                                <Link to={`${RoutePath.artist}${album?.artist.id}`}>
                                    <Text text={album?.artist.name} bold />
                                </Link>
                                <Text text={`${album?.album_tracks.length} треков`} />
                                <Text text={album?.date} />
                            </div>
                        </div>
                    </div>
                )
            }

        </DynamicReducerLoader>
    );
});
