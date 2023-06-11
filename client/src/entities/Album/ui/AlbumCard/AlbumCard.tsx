import { memo } from 'react';
import classNames from 'classnames';
import { Card } from 'shared/ui/Card/Card';
import { Link } from 'shared/ui/Link/Link';
import { RoutePath } from 'shared/const/router';
import { HStack } from 'shared/ui/Stack';
import { ItemView } from 'shared/types/ItemView';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { AppImage } from 'shared/ui/AppImage';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
                    <AppImage
                        src={`${__STATIC_URL__}${album.img}`}
                        width={50}
                        height={50}
                        squared
                        cover
                        fallback={
                            <Skeleton width={50} height={50} border="5px" />
                        }
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
                <Link to={`${RoutePath.album}${album.id}`}>
                    {album.img && (
                        <AppImage
                            src={`${__STATIC_URL__}${album.img}`}
                            width={50}
                            height={50}
                            squared
                            cover
                            fallback={
                                <Skeleton width={50} height={50} border="5px" />
                            }
                        />
                    )}
                    <Text
                        title={album.title}
                        text={`${t('Альбом')}   ${album.artist.name}`}
                        classname={cls.name}
                    />
                </Link>
            </HStack>
        );
    }

    return (
        <Link to={`${RoutePath.album}${album.id}`}>
            <Card>
                <div className={cls.card}>
                    <AppImage
                        src={`${__STATIC_URL__}${album.img}`}
                        width={170}
                        height={190}
                        squared
                        errorFallback={
                            <Skeleton width={170} height={170} border="5px" />
                        }
                        fallback={
                            <Skeleton width={170} height={170} border="5px" />
                        }
                    />
                    <div>
                        <Text
                            title={album.title}
                            text={album.description}
                            classname={cls.info}
                            size={TextSize.M}
                            bold
                        />
                    </div>
                </div>
            </Card>
        </Link>
    );
});
