import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { AlbumList } from 'entities/Album';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import cls from './PopularAlbumsList.module.scss';
import { usePopularAlbumsList } from '../../api/popularAlbumsApi';

interface PopularAlbumsListProps {
    className?: string;
}

export const PopularAlbumsList = memo((props: PopularAlbumsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, isLoading, error } = usePopularAlbumsList(6);

    if (!data) {
        return null;
    }

    return (
        <VStack
            max
            className={classNames(cls.popularAlbumsList, {}, [className])}
            gap="16"
        >
            <Text title={t('Популярные альбомы')} bold />
            <AlbumList albums={data} isLoading={isLoading} />
        </VStack>
    );
});
