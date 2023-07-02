import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { AlbumList } from 'entities/Album';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './AlbumsBySubscribedArtistsList.module.scss';
import { useAlbumsBySubscribedArtistsList } from '../../api/albumsBySubscribedArtistsListApi';

interface AlbumsBySubscribedArtistsListProps {
    className?: string;
}

export const AlbumsBySubscribedArtistsList = memo(
    (props: AlbumsBySubscribedArtistsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const userData = useSelector(getUserAuthData);

        const { data, isLoading, error } = useAlbumsBySubscribedArtistsList({
            limit: 6,
            userId: userData?.id,
        });

        if (!data) {
            return null;
        }

        return (
            <VStack
                max
                className={classNames(cls.albumsBySubscribedArtistsList, {}, [
                    className,
                ])}
                gap="16"
            >
                <Text title={t('Ваши подписки')} bold />
                <AlbumList albums={data} isLoading={isLoading} />
            </VStack>
        );
    },
);
