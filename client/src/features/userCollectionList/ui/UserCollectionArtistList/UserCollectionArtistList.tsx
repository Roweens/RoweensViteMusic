import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Artist, ArtistList } from 'entities/Artist';
import classNames from 'classnames';
import cls from './UserCollectionArtistList.module.scss';

interface UserCollectionArtistListProps {
    className?: string;
    items?: Artist[];
    isLoading: boolean;
    compact: boolean;
}

export const UserCollectionArtistList = memo(
    (props: UserCollectionArtistListProps) => {
        const { className, items, isLoading, compact } = props;
        const { t } = useTranslation();

        if (!items) {
            return null;
        }

        return (
            <ArtistList
                viewType={compact ? 'mini' : 'compact'}
                artists={items}
                isLoading={isLoading}
                className={classNames(cls.list, {}, [className])}
            />
        );
    },
);
