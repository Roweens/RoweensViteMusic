import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Album } from 'entities/Album';
import { Track } from 'entities/Track';
import { Artist } from 'entities/Artist';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack, VStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import { getUserCollectionListIsLoading } from '../../model/selectors/getUserCollectionListIsLoading';
import { getUserCollectionListItems } from '../../model/selectors/getUserCollectionListItems';
import { fetchCollectionCategory } from '../../model/services/fetchCollectionCategory/fetchCollectionCategory';
import { userCollectionListActions } from '../../model/slice/userCollectionListSlice';
import { getUserCollectionListCategory } from '../../model/selectors/getUserCollectionListCategory';
import cls from './userCollectionList.module.scss';
import { UserCollectionListCategory } from '../../model/types/userCollectionListSchema';
import { UserCollectionAlbumsList } from '../UserCollectionAlbumsList/UserCollectionAlbumsList';
import { UserCollectionTracksList } from '../UserCollectionTracksList/UserCollectionTracksList';
import { UserCollectionArtistList } from '../UserCollectionArtistList/UserCollectionArtistList';
import { ReactComponent as LeftArrow } from '../../assets/leftArr.svg';
import { ReactComponent as RightArrow } from '../../assets/rightArr.svg';

interface userCollectionListProps {
    className?: string;
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
    onFavouriteClick?: () => void;
}

export const UserCollectionList = memo((props: userCollectionListProps) => {
    const { className, isCollapsed, setIsCollapsed, onFavouriteClick } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCollectionCategory());
    });

    const tabItems: TabItem<UserCollectionListCategory>[] = useMemo(
        () => [
            {
                id: 1,
                content: <Text title={t('Альбомы')} size={TextSize.S} />,
                value: 'Albums',
            },
            {
                id: 2,
                content: <Text title={t('Исполнители')} size={TextSize.S} />,
                value: 'Artists',
            },
            {
                id: 3,
                content: <Text title={t('Треки')} size={TextSize.S} />,
                value: 'Tracks',
            },
        ],
        [t],
    );

    const category = useSelector(getUserCollectionListCategory);
    const items = useSelector(getUserCollectionListItems);
    const isLoading = useSelector(getUserCollectionListIsLoading);

    const onCategoryChangeHandle = useCallback(
        (tab: TabItem<UserCollectionListCategory>) => {
            dispatch(userCollectionListActions.setCategory(tab.value));
            dispatch(fetchCollectionCategory());
        },
        [dispatch],
    );

    const onSizeToggle = useCallback(() => {
        setIsCollapsed(!isCollapsed);
    }, [isCollapsed, setIsCollapsed]);

    const content =
        category === 'Albums' ? (
            <UserCollectionAlbumsList
                items={items as Album[]}
                isLoading={isLoading}
                compact={isCollapsed}
            />
        ) : category === 'Tracks' ? (
            <UserCollectionTracksList
                items={items as Track[]}
                isLoading={isLoading}
                compact={isCollapsed}
                onFavouriteClick={onFavouriteClick}
            />
        ) : (
            <UserCollectionArtistList
                items={items as Artist[]}
                isLoading={isLoading}
                compact={isCollapsed}
            />
        );

    if (isLoading) {
        return null;
    }

    if (isCollapsed) {
        return (
            <VStack className={cls.userCollectionWrapper} max align="center">
                <HStack justify="between">
                    <Button
                        type="button"
                        onClick={onSizeToggle}
                        data-testid="sidebar-toggle"
                        className={cls.collapsedBtn}
                        theme={ButtonTheme.CLEAN}
                        size={ButtonSize.LARGE}
                    >
                        {isCollapsed ? (
                            <Icon Svg={RightArrow} height={26} width={26} />
                        ) : (
                            <Icon Svg={LeftArrow} height={26} width={26} />
                        )}
                    </Button>
                </HStack>
                {content}
            </VStack>
        );
    }

    return (
        <div className={cls.userCollectionWrapper}>
            <HStack justify="between">
                <Text title={t('Моя медиатека')} />
                <Button
                    type="button"
                    onClick={onSizeToggle}
                    data-testid="sidebar-toggle"
                    className={cls.collapsedBtn}
                    theme={ButtonTheme.CLEAN}
                    size={ButtonSize.LARGE}
                >
                    {isCollapsed ? (
                        <Icon Svg={RightArrow} height={26} width={26} />
                    ) : (
                        <Icon Svg={LeftArrow} height={26} width={26} />
                    )}
                </Button>
            </HStack>
            <Tabs
                tabs={tabItems}
                value={category}
                onTabClick={onCategoryChangeHandle}
                className={classNames(cls.userCollectionList, {}, [className])}
                align="horizontal"
            />
            {content}
        </div>
    );
});
