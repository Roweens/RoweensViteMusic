import { Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './FavouriteTracksModal.module.scss';
import { FavouriteTracksListAsync } from '../FavouriteTracksList/FavouriteTracksList.async';

interface FavouriteTracksModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const FavouriteTracksModal = memo((props: FavouriteTracksModalProps) => {
    const { className, isOpen, onClose } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);

    if (!userData?.id) {
        return null;
    }

    return (
        <Modal
            isVisible={isOpen}
            onClose={onClose}
            className={classNames(cls.favouriteTracksModal, {}, [className])}
        >
            <VStack max gap="16" align="center" justify="between">
                <Text title={t('Избранные треки')} bold size={TextSize.L} />
                <Suspense fallback={<Loader />}>
                    <FavouriteTracksListAsync id={userData?.id} />
                </Suspense>
            </VStack>
        </Modal>
    );
});
