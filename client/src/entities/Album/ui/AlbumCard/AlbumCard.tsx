import { memo } from 'react';
import classNames from 'classnames';
import { Card } from 'shared/ui/Card/Card';
import { Link } from 'shared/ui/Link/Link';
import { Image } from 'shared/ui/Image/Image';
import { RoutePath } from 'shared/const/router';
import { HStack } from 'shared/ui/Stack';
import { ItemView } from 'shared/types/ItemView';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Album } from '../../model/types/album';
import cls from './AlbumCard.module.scss';

interface AlbumCardProps {
    className?: string;
    album: Album;
    viewType?: ItemView;
}

export const AlbumCard = memo((props: AlbumCardProps) => {
    const { className, album, viewType = 'full' } = props;
    const { t } = useTranslation();

    if (viewType === 'mini') {
        return (
            <HStack
                className={classNames(cls.albumItemCompact, {}, [className])}
                max
                align="center"
                gap="16"
            >
                {album.img && (
                    <Image
                        width={50}
                        height={50}
                        src={`${__STATIC_URL__}${album.img}`}
                        squared
                    />
                )}
            </HStack>
        );
    }

    if (viewType === 'compact') {
        return (
            <HStack
                className={classNames(cls.albumItemCompact, {}, [className])}
                max
                align="center"
                gap="16"
            >
                {album.img && (
                    <Image
                        width={50}
                        height={50}
                        src={`${__STATIC_URL__}${album.img}`}
                        squared
                    />
                )}
                <Text
                    title={album.title}
                    text={`${t('Альбом')}   ${album.artist.name}`}
                    classname={cls.name}
                />
            </HStack>
        );
    }

    return (
        <Link to={`${RoutePath.album}${album.id}`}>
            <Card>
                <div className={cls.card}>
                    <Image
                        src={`${__STATIC_URL__}${album.img}`}
                        alt="card image"
                        squared
                        width="170px"
                        height="170px"
                    />
                    <div className={cls.info}>
                        <h5 className={cls.title}>{album.title}</h5>
                        <p className={cls.text}>{album.description}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
});
