import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text } from 'shared/ui/Text/Text';
import { Image } from 'shared/ui/Image/Image';
import { Link } from 'shared/ui/Link/Link';
import cls from './ArtistDescriptionModal.module.scss';
import { Artist } from '../../model/types/artist';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';

interface ArtistDescriptionModalProps {
   className?: string;
   isOpen: boolean;
   onClose?: () => void
   artist?: Artist
}

export const ArtistDescriptionModal = memo((props:ArtistDescriptionModalProps) => {
    const {
        className, isOpen, onClose, artist,
    } = props;
    const { t } = useTranslation();

    return (
        <Modal
            className={classNames(cls.artistDescriptionModal, {}, [className])}
            isVisible={isOpen}
            onClose={onClose}
        >
            <Image
                src={`${__STATIC_URL__}${artist?.bioImg}`}
                width="100%"
                height={250}
                squared
                className={cls.img}
            />
            <div className={cls.info}>
                <div className={cls.stats}>
                    <Text title="X" text="Подписчиков" />
                    <Text title={artist?.listens} text="Слушателей" />
                    <Link to="#" Icon={FacebookIcon} className={cls.link}>Facebook</Link>
                    <Link to="#" Icon={YoutubeIcon} className={cls.link}>Youtube</Link>
                    <Link to="#" Icon={TwitterIcon} className={cls.link}>Twiiter</Link>
                </div>
                <Text text={artist?.bio} />
            </div>
        </Modal>

    );
});
