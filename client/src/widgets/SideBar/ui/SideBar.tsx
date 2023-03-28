import classNames from 'classnames';
import { memo } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { Link } from 'shared/ui/Link/Link';
import { useTranslation } from 'react-i18next';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as AlbumIcon } from '../assets/album.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.sideBar, {}, className)} data-testid="sidebar">
            <div className={cls.links}>
                <Link to="/" Icon={HomeIcon}>
                    {t('Главная')}
                </Link>
                <Link to="/tracks" Icon={SearchIcon}>
                    {t('Поиск')}
                </Link>
                <Link to="/tracks" Icon={AlbumIcon}>
                    {t('Мои альбомы')}
                </Link>
                <Link to="/tracks" Icon={PlusIcon} className="separated">
                    {t('Создать плейлист')}
                </Link>
                <Link to="/tracks" Icon={HeartIcon}>
                    {t('Избранные треки')}
                </Link>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
    );
});
