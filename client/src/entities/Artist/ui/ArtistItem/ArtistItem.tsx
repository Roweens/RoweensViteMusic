import { memo } from 'react';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { Image } from 'shared/ui/Image/Image';
import { ItemView } from 'shared/types/ItemView';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { Link } from 'shared/ui/Link/Link';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/const/router';
import cls from './ArtistItem.module.scss';
import { Artist } from '../../model/types/artist';

interface ArtistItemProps {
    className?: string;
    artist: Artist;
    viewType?: ItemView;
}

export const ArtistItem = memo((props: ArtistItemProps) => {
    const { className, artist, viewType } = props;
    const { t } = useTranslation();

    if (viewType === 'mini') {
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
            </HStack>
        );
    }

    if (viewType === 'compact') {
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
                <Text
                    title={artist.name}
                    text={t('Исполнитель')}
                    classname={cls.name}
                />
            </HStack>
        );
    }

    return (
        <Link to={`${RoutePath.artist}${artist.id}`}>
            <Card>
                <div className={cls.card}>
                    <Image
                        src={`${__STATIC_URL__}${artist.img}`}
                        alt="card image"
                        squared
                        width="170px"
                        height="170px"
                    />
                    <div className={cls.info}>
                        <h5 className={cls.title}>{artist.name}</h5>
                        <p className={cls.text}>{artist.bio}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
});
