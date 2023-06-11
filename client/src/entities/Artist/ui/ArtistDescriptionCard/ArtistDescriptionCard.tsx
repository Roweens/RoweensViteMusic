import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppImage } from 'shared/ui/AppImage';
import { getArtistData } from '../../model/selectors/getArtistData';
import { ArtistDescriptionModal } from '../ArtistDescriptionModal/ArtistDescriptionModal';
import cls from './ArtistDescriptionCard.module.scss';

interface ArtistDescriptionCardProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export const ArtistDescriptionCard = memo(
    (props: ArtistDescriptionCardProps) => {
        const { className, isOpen, onClose, onOpen } = props;
        const { t } = useTranslation();

        const artist = useSelector(getArtistData);

        return (
            <div
                className={classNames(cls.artistDescriptionCard, {}, [
                    className,
                ])}
            >
                {artist?.bioImg ? (
                    <>
                        <Text
                            title={t('Об исполнителе')}
                            classname={cls.title}
                        />
                        <div className={cls.bioCard} onClick={onOpen}>
                            <AppImage
                                src={`${__STATIC_URL__}${artist?.img}`}
                                width={600}
                                height="auto"
                                squared
                                className={cls.img}
                                errorFallback={
                                    <Skeleton
                                        width={600}
                                        height="auto"
                                        border="5px"
                                    />
                                }
                                fallback={
                                    <Skeleton
                                        width={600}
                                        height="auto"
                                        border="5px"
                                    />
                                }
                            />
                            <div className={cls.textWrapper}>
                                <Text
                                    title={t('X слушателей')}
                                    bold
                                    size={TextSize.S}
                                />
                                <Text title={artist?.label} size={TextSize.S} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Text
                            title={t('Об исполнителе')}
                            classname={cls.title}
                        />
                        <Card>
                            <AppImage
                                src={`${__STATIC_URL__}${artist?.img}`}
                                width={200}
                                height={200}
                                squared
                                className={cls.img}
                                errorFallback={
                                    <Skeleton
                                        width={200}
                                        height={200}
                                        border="5px"
                                    />
                                }
                                fallback={
                                    <Skeleton
                                        width={200}
                                        height={200}
                                        border="5px"
                                    />
                                }
                            />
                            <Text text={t('X слушателей')} bold />
                            <Text text={artist?.label} />
                        </Card>
                    </>
                )}
                {isOpen && (
                    <ArtistDescriptionModal
                        isOpen={isOpen}
                        onClose={onClose}
                        artist={artist}
                    />
                )}
            </div>
        );
    },
);
