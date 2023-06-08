import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { AlbumList } from 'entities/Album';
import { Text } from 'shared/ui/Text/Text';
import { TrackList } from 'entities/Track';
import { ArtistList } from 'entities/Artist';
import { ProfileList } from 'entities/Profile';
import { Card } from 'shared/ui/Card/Card';
import cls from './SearchPageList.module.scss';
import { getSearchPageData } from '../../model/selectors/getSearchPageData';

interface SearchPageListProps {
    className?: string;
}

export const SearchPageList = memo((props: SearchPageListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const data = useSelector(getSearchPageData);

    return (
        <VStack
            className={classNames(cls.searchPageList, {}, [className])}
            gap="32"
            max
        >
            {data?.tracks && (
                <VStack gap="16">
                    <Text title={t('Треки')} bold />
                    <Card withHoverEffect={false}>
                        <TrackList tracks={data?.tracks} viewType="compact" />
                    </Card>
                </VStack>
            )}
            <div className={cls.groupWrapper}>
                {data?.albums && (
                    <VStack gap="8">
                        <Text title={t('Альбомы')} bold />
                        <AlbumList albums={data?.albums} />
                    </VStack>
                )}
                {data?.artists && (
                    <VStack gap="8">
                        <Text title={t('Артисты')} bold />
                        <ArtistList artists={data.artists} />
                    </VStack>
                )}
            </div>
            <div className={cls.groupWrapper}>
                {data?.playlists && (
                    <VStack gap="8">
                        <Text title={t('Плейлисты')} bold />
                        <AlbumList albums={data.playlists} />
                    </VStack>
                )}
                {data?.profiles && (
                    <VStack gap="8">
                        <Text title={t('Профили')} bold />
                        <ProfileList profiles={data.profiles} />
                    </VStack>
                )}
            </div>
        </VStack>
    );
});
