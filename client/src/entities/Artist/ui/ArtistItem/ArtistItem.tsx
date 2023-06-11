import { memo } from 'react';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { ItemView } from 'shared/types/ItemView';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { Link } from 'shared/ui/Link/Link';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/const/router';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppImage } from 'shared/ui/AppImage';
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
                    <AppImage
                        src={`${__STATIC_URL__}${artist.img}`}
                        width={50}
                        height={50}
                        squared
                        cover
                        errorFallback={
                            <Skeleton width={170} height={170} border="5px" />
                        }
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
                className={classNames(cls.artistItemCompact, {}, [className])}
                max
                align="center"
                gap="16"
            >
                <Link to={`${RoutePath.artist}${artist.id}`}>
                    {artist.img && (
                        <AppImage
                            src={`${__STATIC_URL__}${artist.img}`}
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
                        title={artist.name}
                        text={t('Исполнитель')}
                        classname={cls.name}
                    />
                </Link>
            </HStack>
        );
    }

    return (
        <Link to={`${RoutePath.artist}${artist.id}`}>
            <Card>
                <div className={cls.card}>
                    <AppImage
                        src={`${__STATIC_URL__}${artist.img}`}
                        width={170}
                        height={170}
                        squared
                        cover
                        fallback={
                            <Skeleton width={170} height={170} border="5px" />
                        }
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
