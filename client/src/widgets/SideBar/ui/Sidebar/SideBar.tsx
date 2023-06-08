import classNames from 'classnames';
import { memo, useState } from 'react';
import { VStack } from 'shared/ui/Stack';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { UserCollectionList } from 'features/userCollectionList';
import cls from './SideBar.module.scss';
import { SidebarItemsList } from '../SidebarItemsList/SidebarItemsList';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <VStack
            className={classNames(
                cls.sideBar,
                { [cls.collapsed]: isCollapsed },
                className,
            )}
            data-testid="sidebar"
            justify="between"
        >
            <VStack gap="32" max align={isCollapsed ? 'center' : 'start'}>
                <SidebarItemsList isCollapsed={isCollapsed} />
                <UserCollectionList
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                />
            </VStack>
            <VStack align="center" max gap="8">
                <ThemeSwitcher />
                <LangSwitcher />
            </VStack>
        </VStack>
    );
});
