import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Image } from 'shared/ui/Image/Image';
import { useSelector } from 'react-redux';
import { getArtistData } from '../../model/selectors/getArtistData';
import { ArtistDescriptionModal } from '../ArtistDescriptionModal/ArtistDescriptionModal';
import cls from './ArtistDescriptionCard.module.scss';

interface ArtistDescriptionCardProps {
   className?: string;
   isOpen: boolean;
   onClose: () => void;
   onOpen: () => void;
}

export const ArtistDescriptionCard = memo((props:ArtistDescriptionCardProps) => {
    const {
        className, isOpen, onClose, onOpen,
    } = props;
    const { t } = useTranslation();

    const artist = useSelector(getArtistData);

    return (
        <div className={classNames(cls.artistDescriptionCard, {}, [className])}>
            {artist?.bioImg ? (
                <>
                    <Text title={t('Об исполнителе')} classname={cls.title} />
                    <div className={cls.bioCard} onClick={onOpen}>
                        <Image
                            src={`${__STATIC_URL__}${artist?.img}`}
                            height="auto"
                            width={600}
                            squared
                            className={cls.img}
                        />
                        <div className={cls.textWrapper}>
                            <Text text={t('X слушателей')} bold />
                            <Text text={artist?.label} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Text title={t('Об исполнителе')} classname={cls.title} />
                    <Card>
                        <Image src={`${__STATIC_URL__}${artist?.img}`} width={200} height={200} squared />
                        <Text text={t('X слушателей')} bold />
                        <Text text={artist?.label} />
                    </Card>
                </>
            )}
            {isOpen && <ArtistDescriptionModal isOpen={isOpen} onClose={onClose} artist={artist} />}
        </div>
    );
});
