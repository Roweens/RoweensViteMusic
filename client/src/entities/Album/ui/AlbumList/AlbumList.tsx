import { memo } from 'react';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ItemView } from 'shared/types/ItemView';
import cls from './AlbumList.module.scss';
import { Album } from '../../model/types/album';
import { AlbumCard } from '../AlbumCard/AlbumCard';
import { AlbumCardSkeleton } from '../AlbumCardSkeleton/AlbumCardSkeleton';
import { HStack, VStack } from 'shared/ui/Stack';

interface AlbumListProps {
    className?: string;
    isLoading?: boolean;
    error?: string;
    albums: Album[];
    viewType?: ItemView;
}

const skeletons = () => new Array(5).fill(0).map(() => <AlbumCardSkeleton />);

export const AlbumList = memo((props: AlbumListProps) => {
    const { className, albums, isLoading, error, viewType = 'full' } = props;
    const { t } = useTranslation();

    if (!isLoading && !albums.length) {
        return (
            <div className={classNames(cls.albumList)}>
                <Text title={t('Альбомы не найдены')} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.albumList)}>
                <Text title={t('Возникла ошибка при загрузке альбомов')} />
            </div>
        );
    }

    if (viewType === 'compact' || viewType === 'mini') {
        return (
            <VStack
                className={classNames(cls.albumListCompact, {}, [className])}
            >
                {isLoading
                    ? skeletons()
                    : albums?.map((album) => (
                          <AlbumCard album={album} viewType={viewType} />
                      ))}
            </VStack>
        );
    }

    return (
        <HStack
            className={classNames(cls.albumList, {}, [className])}
            max
            gap="16"
        >
            {isLoading
                ? skeletons()
                : albums?.map((album) => (
                      <AlbumCard album={album} viewType={viewType} />
                  ))}
        </HStack>
    );
});
