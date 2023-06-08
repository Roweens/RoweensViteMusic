import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ItemView } from 'shared/types/ItemView';
import { Text } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { Artist } from '../../model/types/artist';
import cls from './ArtistList.module.scss';
import { ArtistItem } from '../ArtistItem/ArtistItem';

interface ArtistListProps {
    className?: string;
    viewType?: ItemView;
    artists: Artist[];
    isLoading?: boolean;
}

export const ArtistList = memo((props: ArtistListProps) => {
    const { className, artists, isLoading, viewType = 'full' } = props;
    const { t } = useTranslation();

    const listClass =
        viewType === 'full' ? cls.artistList : cls.artistListCompact;

    if (!isLoading && !artists.length) {
        return (
            <div className={classNames(listClass)}>
                <Text title={t('Исполнители не найдены')} />
            </div>
        );
    }

    return (
        <HStack className={classNames(listClass, {}, [className])} gap="16">
            {artists.map((artist) => (
                <ArtistItem artist={artist} viewType={viewType} />
            ))}
        </HStack>
    );
});
