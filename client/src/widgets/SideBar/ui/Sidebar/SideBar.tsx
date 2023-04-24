import classNames from 'classnames';
import { memo } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import cls from './SideBar.module.scss';
import { SidebarItemsList } from '../SidebarItemsList/SideBarItemsList';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.sideBar, {}, className)}
            data-testid="sidebar"
            justify="between"
        >
            <VStack gap="32">
                <SidebarItemsList />
            </VStack>

            <VStack align="center" max gap="8">
                <ThemeSwitcher />
                <LangSwitcher />
            </VStack>
        </VStack>
    );
});
