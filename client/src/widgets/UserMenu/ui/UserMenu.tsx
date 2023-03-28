/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import {
    memo, ReactNode, useCallback, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Link } from 'shared/ui/Link/Link';
import { getUserAuthData, userActions } from 'entities/User';
import { Image } from 'shared/ui/Image/Image';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { ReactComponent as DownArrow } from '../assets/down.svg';
import Avatar from '../assets/Avatar.jpg';
import cls from './UserMenu.module.scss';

interface UserMenuProps {
    className?: string;
    username?: string;
    Icon?: ReactNode;
}

export const UserMenu = memo((props: UserMenuProps) => {
    const [collapsed, isCollapsed] = useState(false);
    const { t } = useTranslation();
    const { className, username, Icon = Avatar } = props;
    const dispatch = useAppDispatch();
    const auth = useSelector(getUserAuthData);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.dropDown, {}, [className])}>
            <div
                className={classNames(cls.dropDownChip, {}, [className])}
                onClick={() => isCollapsed(!collapsed)}
            >
                <Image src={Avatar} width={40} height={40} />
                <h5>{username}</h5>
                <DownArrow />
            </div>
            {collapsed && (
                <div className={classNames(cls.dropDownList)}>
                    <ul>
                        <li>
                            <Link to={`${RoutePath.profile}${auth?.id}`}>{t('Профиль')}</Link>
                        </li>
                        <li>
                            <Link to="/">{t('Настройки')}</Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/login" onClick={handleLogout}>{t('Выйти')}</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
});
