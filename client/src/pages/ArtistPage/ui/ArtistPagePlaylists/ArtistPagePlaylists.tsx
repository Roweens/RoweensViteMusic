import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AlbumList } from 'entities/Album';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { fetchPlaylistsByArtistId } from '../../model/services/fetchPlaylistsForArtist/fetchPlaylistsForArtist';
import { getArtistPlaylists } from '../../model/slice/artistPagePlaylistsSlice';
import { getArtistPagePlaylistsIsLoading } from '../../model/selectors/getArtistPagePlaylists';
import cls from './ArtistPagePlaylists.module.scss';

interface ArtistPagePlaylistsProps {
    className?: string;
    id: string;
}

export const ArtistPagePlaylists = memo((props: ArtistPagePlaylistsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const playlists = useSelector(getArtistPlaylists.selectAll);
    const isLoading = useSelector(getArtistPagePlaylistsIsLoading);
    useInitialEffect(() => {
        dispatch(fetchPlaylistsByArtistId(id));
    });

    return (
        <VStack
            className={classNames(cls.artistPagePlaylists, {}, [className])}
            gap="16"
        >
            <Text
                title={t('Плейлисты с этим исполнителем')}
                bold
                size={TextSize.M}
            />
            <AlbumList albums={playlists} isLoading={isLoading} />
        </VStack>
    );
});
