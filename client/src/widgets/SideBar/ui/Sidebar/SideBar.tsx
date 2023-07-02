import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { VStack } from 'shared/ui/Stack';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { UserCollectionList } from 'features/userCollectionList';
import { FavouriteTracksModal } from 'features/userFavouriteTracks';
import cls from './SideBar.module.scss';
import { SidebarItemsList } from '../SidebarItemsList/SidebarItemsList';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isFavouriteListOpen, setIsFavouriteListOpen] = useState(false);

    const onCloseTracksModal = useCallback(() => {
        setIsFavouriteListOpen(false);
    }, []);

    const onOpenTracksModal = useCallback(() => {
        setIsFavouriteListOpen(true);
    }, []);

    return (
        <VStack
            className={classNames(
                cls.sideBar,
                { [cls.collapsed]: isCollapsed },
                className,
            )}
            data-testid="sidebar"
            gap="8"
        >
            <VStack gap="32" max align={isCollapsed ? 'center' : 'start'}>
                <SidebarItemsList
                    isCollapsed={isCollapsed}
                    onFavouriteTracksClick={onOpenTracksModal}
                />
                <UserCollectionList
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                    onFavouriteClick={onOpenTracksModal}
                />
            </VStack>
            <VStack align="center" max gap="8" className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </VStack>

            {isFavouriteListOpen && (
                <FavouriteTracksModal
                    isOpen={isFavouriteListOpen}
                    onClose={onCloseTracksModal}
                />
            )}
        </VStack>
    );
});
