import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Link } from 'shared/ui/Link/Link';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { SidebarItemType } from '../../model/types/sidebarItem';
import cls from './SideBarItemsList.module.scss';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as AlbumIcon } from '../../assets/album.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';

interface SideBarItemsListProps {
   className?: string;
}

export const SidebarItemsList = memo((props:SideBarItemsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const itemsList: SidebarItemType[] = useMemo<SidebarItemType[]>(() => [
        {
            text: t('Главная'),
            Icon: HomeIcon,
            path: RoutePath.main,
        },
        {
            text: t('Мои альбомы'),
            Icon: AlbumIcon,
            path: RoutePath.main,
        },
        {
            text: t('Создать плейлист'),
            Icon: PlusIcon,
            path: RoutePath.main,
        },
        {
            text: t('Избранные треки'),
            Icon: HeartIcon,
            path: RoutePath.main,
        },

    ], [t]);

    return (
        <>
            {itemsList.map((item) => (
                <Link to={item.path} className={classNames('', {}, [className])}>
                    <Icon Svg={item.Icon} height={24} width={24} />
                    <Text text={item.text} size={TextSize.M} />
                </Link>
            ))}
        </>
    );
});
