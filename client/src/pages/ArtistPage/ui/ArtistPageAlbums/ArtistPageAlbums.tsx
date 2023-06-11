import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AlbumList } from 'entities/Album';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { getArtistPageAlbumsIsLoading } from '../../model/selectors/getArtistPageAlbums';
import { fetchAlbumsByArtistId } from '../../model/services/fetchAlbumsByArtistId/fetchAlbumsByArtistId';
import cls from './ArtistPageAlbums.module.scss';
import { getArtistAlbums } from '../../model/slice/artistPageAlbumsSlice';
import { VStack } from 'shared/ui/Stack';

interface ArtistPageAlbumsProps {
    className?: string;
    id: string;
}

export const ArtistPageAlbums = memo((props: ArtistPageAlbumsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const albums = useSelector(getArtistAlbums.selectAll);
    const isLoading = useSelector(getArtistPageAlbumsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchAlbumsByArtistId(id));
    });

    return (
        <VStack
            className={classNames(cls.artistPageAlbums, {}, [className])}
            gap="16"
        >
            <Text title={t('Альбомы исполнителя')} bold />
            <AlbumList albums={albums} isLoading={isLoading} />
        </VStack>
    );
});
