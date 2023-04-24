import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactComponent as FavIcon } from '../../assets/heart.svg';
import cls from './CollectionPageFavouriteCard.module.scss';

interface CollectionPageFavouriteCardProps {
   className?: string;
   id?: string;
}

export const CollectionPageFavouriteCard = memo((props:CollectionPageFavouriteCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onFavouriteCardNavigate = useCallback(() => {
        navigate(RoutePath.favourite + id);
    }, [id, navigate]);

    return (
        <Card className={classNames(cls.collectionPageFavouriteCard, {}, [className])} onClick={onFavouriteCardNavigate}>
            <Card className={cls.favCard}>
                <Icon Svg={FavIcon} fill height={70} width={70} />
            </Card>
            <Text title={t('Любимые треки')} />
        </Card>
    );
});
