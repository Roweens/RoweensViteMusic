import { memo } from 'react';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text } from 'shared/ui/Text/Text';
import { Link } from 'shared/ui/Link/Link';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppImage } from 'shared/ui/AppImage';

import cls from './ArtistDescriptionModal.module.scss';
import { Artist } from '../../model/types/artist';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';

interface ArtistDescriptionModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    artist?: Artist;
}

export const ArtistDescriptionModal = memo(
    (props: ArtistDescriptionModalProps) => {
        const { className, isOpen, onClose, artist } = props;

        return (
            <Modal
                className={classNames(cls.artistDescriptionModal, {}, [
                    className,
                ])}
                isVisible={isOpen}
                onClose={onClose}
            >
                <AppImage
                    src={`${__STATIC_URL__}${artist?.bioImg}`}
                    width="100%"
                    height={250}
                    squared
                    className={cls.img}
                    fallback={
                        <Skeleton width="100%" height={250} border="5px" />
                    }
                />
                <div className={cls.info}>
                    <div className={cls.stats}>
                        <Text title="X" text="Подписчиков" />
                        <Text title={artist?.listens} text="Слушателей" />
                        <Link to="twitter.com" className={cls.link}>
                            <Icon Svg={FacebookIcon} />
                            Facebook
                        </Link>
                        <Link to="youtube.com" className={cls.link}>
                            <Icon Svg={YoutubeIcon} />
                            Youtube
                        </Link>
                        <Link to="facebook.com" className={cls.link}>
                            <Icon Svg={TwitterIcon} />
                            Twiiter
                        </Link>
                    </div>
                    <Text text={artist?.bio} />
                </div>
            </Modal>
        );
    },
);
