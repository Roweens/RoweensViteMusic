import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Album, AlbumList } from 'entities/Album';
import cls from './UserCollectionAlbumsList.module.scss';

interface UserCollectionAlbumsListProps {
    className?: string;
    items?: Album[];
    isLoading: boolean;
    compact: boolean;
}

export const UserCollectionAlbumsList = memo(
    (props: UserCollectionAlbumsListProps) => {
        const { className, items, isLoading, compact } = props;
        const { t } = useTranslation();

        if (!items) {
            return null;
        }

        return (
            <AlbumList
                className={classNames(cls.userCollectionAlbumsList, {}, [
                    className,
                ])}
                viewType={compact ? 'mini' : 'compact'}
                albums={items}
                isLoading={isLoading}
            />
        );
    },
);
