import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Image } from 'shared/ui/Image/Image';
import { getArtistData, getArtistIsLoading } from 'entities/Artist/model/selectors/getArtistData';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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

export const ArtistDetails = memo((props:ArtistDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const artist = useSelector(getArtistData);
    const isLoading = useSelector(getArtistIsLoading);

    useEffect(() => {
        if (id) {
            dispatch(fetchArtistById(id));
        }
    }, [dispatch, id]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            {isLoading ? (
                <div className={classNames(cls.artistDetails, {}, [className])}>
                    <Skeleton width="100%" height="400px" className={cls.img} />
                    <div className={cls.info}>
                        <Skeleton className={cls.name} width={320} height={70} border="7px" />
                        <Skeleton width={140} height={25} border="7px" />
                        <Skeleton width={210} height={50} border="10px" />
                    </div>
                </div>
            ) : (
                <div className={classNames(cls.artistDetails, {}, [className])}>

                    {artist?.img && <Image className={cls.img} src={`${__STATIC_URL__}${artist?.img}`} squared width="100%" height="400px" cover />}

                    <div className={cls.info}>
                        <h5 className={cls.name}>{artist?.name}</h5>
                        <Text text={`${artist?.listens} прослушиваний за всё время`} />
                        <Button theme={ButtonTheme.FILLED}> Подписаться </Button>
                    </div>

                </div>
            )}
        </DynamicReducerLoader>
    );
});
