import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Link } from 'shared/ui/Link/Link';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { RoutePath } from 'shared/const/router';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemType } from '../../model/types/sidebarItem';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as AlbumIcon } from '../../assets/album.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

interface SideBarItemsListProps {
    className?: string;
    isCollapsed: boolean;
    onFavouriteTracksClick: () => void;
}

export const SidebarItemsList = memo((props: SideBarItemsListProps) => {
    const { className, isCollapsed, onFavouriteTracksClick } = props;
    const { t } = useTranslation();

    const itemsList: SidebarItemType[] = useMemo<SidebarItemType[]>(
        () => [
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
                text: t('Избранные треки'),
                Icon: HeartIcon,
                onClick: onFavouriteTracksClick,
            },
            {
                text: t('Поиск'),
                Icon: SearchIcon,
                path: RoutePath.search,
            },
        ],
        [onFavouriteTracksClick, t],
    );

    if (isCollapsed) {
        return (
            <>
                {itemsList.map((item) => {
                    const content = (
                        <>
                            <Icon Svg={item.Icon} height={26} width={26} />
                        </>
                    );

                    if (item.path) {
                        return (
                            <Link
                                to={item.path}
                                className={classNames('', {}, [className])}
                            >
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <Button
                            onClick={item.onClick}
                            className={classNames('', {}, [className])}
                            theme={ButtonTheme.CLEAN}
                        >
                            {content}
                        </Button>
                    );
                })}
            </>
        );
    }

    return (
        <>
            {itemsList.map((item) => {
                const content = (
                    <>
                        <Icon Svg={item.Icon} height={32} width={32} />
                        <Text title={item.text} size={TextSize.M} bold />
                    </>
                );

                if (item.path) {
                    return (
                        <Link
                            to={item.path}
                            className={classNames('', {}, [className])}
                        >
                            {content}
                        </Link>
                    );
                }

                return (
                    <Button
                        onClick={item.onClick}
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.CLEAN}
                    >
                        {content}
                    </Button>
                );
            })}
        </>
    );
});
