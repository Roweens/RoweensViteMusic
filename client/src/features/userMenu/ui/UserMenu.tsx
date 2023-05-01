/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import {
    memo, useCallback, useMemo,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DropDown, DropdownItem, ThemeDropDown } from 'shared/ui/DropDown/DropDown';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import { Image } from 'shared/ui/Image/Image';
import { Text } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/const/router';
import Avatar from '../assets/Avatar.jpg';
import cls from './UserMenu.module.scss';
import { ReactComponent as DownArrow } from '../assets/down.svg';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import { ReactComponent as ExitIcon } from '../assets/exit.svg';

interface UserMenuProps {
    className?: string;
    userIcon?: string;
}

export const UserMenu = memo((props: UserMenuProps) => {
    const { className, userIcon = Avatar } = props;

    const auth = useSelector(getUserAuthData);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const options = useMemo<DropdownItem[]>(() => [
        {
            id: 0,
            content:
    <HStack gap="8" className={cls.menuItem}>
        <Icon Svg={ProfileIcon} width={30} height={30} />
        <Text text={t('Профиль')} />
    </HStack>,
            href: `${RoutePath.profile}${auth?.id}`,
        },
        {
            id: 1,
            content:
    <HStack gap="8" className={cls.menuItem}>
        <Icon Svg={ExitIcon} width={30} height={30} />
        <Text text={t('Выход')} />
    </HStack>,
            onClick: handleLogout,
        },
    ], [auth?.id, handleLogout, t]);

    return (
        <DropDown
            options={options}
            theme={ThemeDropDown.FILLED}
            className={classNames(cls.dropDown, {}, [className])}
            trigger={(
                <HStack gap="8">
                    <Image src={userIcon} width={30} height={30} />
                    <Text text={auth?.username} />
                    <Icon Svg={DownArrow} height={20} width={20} />
                </HStack>
            )}
        />
    );
});
