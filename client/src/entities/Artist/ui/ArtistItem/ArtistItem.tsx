import { memo } from 'react';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { Image } from 'shared/ui/Image/Image';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { Artist } from '../../model/types/artist';
import cls from './ArtistItem.module.scss';

interface ArtistItemProps {
   className?: string;
   artist: Artist
}

export const ArtistItem = memo((props:ArtistItemProps) => {
    const { className, artist } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.artistItem, {}, [className])}
            max
            align="center"
            gap="16"
        >
            {artist.img && (
                <Image
                    width={50}
                    height={50}
                    src={`${__STATIC_URL__}${artist.img}`}
                />
            )}
            <Text title={artist.name} text={t('Исполнитель')} classname={cls.name} />
        </HStack>
    );
});
