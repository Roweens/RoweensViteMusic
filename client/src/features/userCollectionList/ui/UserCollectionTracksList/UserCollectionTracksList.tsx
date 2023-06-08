import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Track, TrackList } from 'entities/Track';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { playerActions } from 'widgets/Player';
import { Card } from 'shared/ui/Card/Card';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/const/router';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import cls from './UserCollectionTracksList.module.scss';
import { ReactComponent as FavIcon } from '../../assets/heart.svg';
import { getUserCollectionListViewType } from '../../model/selectors/getUserCollectionListViewType';

interface UserCollectionTracksListProps {
    className?: string;
    items?: Track[];
    isLoading: boolean;
    compact: boolean;
}

export const UserCollectionTracksList = memo(
    (props: UserCollectionTracksListProps) => {
        const { className, items, isLoading, compact } = props;
        const { t } = useTranslation();
        const viewType = useSelector(getUserCollectionListViewType);
        const dispatch = useAppDispatch();
        const navigate = useNavigate();
        const authData = useSelector(getUserAuthData);

        const onPlayHandle = useCallback(
            (track?: Track) => {
                if (track) {
                    dispatch(playerActions.setTrack(track));
                    dispatch(playerActions.setPaused(false));
                }
            },
            [dispatch],
        );

        const onPauseHandle = useCallback(
            (track?: Track) => {
                if (track) {
                    dispatch(playerActions.setPaused(true));
                    dispatch(playerActions.setTrack(track));
                }
            },
            [dispatch],
        );

        const onFavouriteCardNavigate = useCallback(() => {
            navigate(`${RoutePath.favourite}${authData?.id}`);
        }, [authData?.id, navigate]);

        if (!items) {
            return null;
        }

        return (
            <div
                className={classNames(cls.userCollectionTracksList, {}, [
                    className,
                ])}
            >
                {!compact && (
                    <HStack
                        className={classNames(cls.favItem, {}, [className])}
                        onClick={onFavouriteCardNavigate}
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
                    onTrackPlay={onPlayHandle}
                    onTrackPause={onPauseHandle}
                    className={cls.list}
                    shortTitle
                />
            </div>
        );
    },
);
