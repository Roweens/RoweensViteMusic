import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Track, TrackList } from 'entities/Track';
import { Card } from 'shared/ui/Card/Card';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './UserCollectionTracksList.module.scss';
import { ReactComponent as FavIcon } from '../../assets/heart.svg';

interface UserCollectionTracksListProps {
    className?: string;
    items?: Track[];
    isLoading: boolean;
    compact: boolean;
    onFavouriteClick?: () => void;
}

export const UserCollectionTracksList = memo(
    (props: UserCollectionTracksListProps) => {
        const { className, items, isLoading, compact, onFavouriteClick } =
            props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const authData = useSelector(getUserAuthData);

        const onFavouriteCardClick = useCallback(() => {
            console.log('12312');
            onFavouriteClick?.();
        }, [onFavouriteClick]);

        if (!items) {
            return null;
        }

        return (
            <VStack
                className={classNames(cls.userCollectionTracksList, {}, [
                    className,
                ])}
                gap="16"
            >
                {!compact && (
                    <HStack
                        className={classNames(cls.favItem, {}, [className])}
                        onClick={onFavouriteCardClick}
                        gap="16"
                    >
                        <Card className={cls.favCard}>
                            <Icon Svg={FavIcon} fill height={30} width={30} />
                        </Card>
                        <Text
                            title={t('Любимые треки')}
                            text={t('Плейлист')}
                            size={TextSize.M}
                        />
                    </HStack>
                )}
                <TrackList
                    tracks={items}
                    isLoading={isLoading}
                    viewType={compact ? 'mini' : 'compact'}
                    className={cls.list}
                    shortTitle
                />
            </VStack>
        );
    },
);
