import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import cls from './CollectionPage.module.scss';
import { CollectionPageFavouriteCard } from '../CollectionPageFavouriteCard/CollectionPageFavouriteCard';

interface CollectionPageProps {
   className?: string;
}

const CollectionPage = memo((props:CollectionPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames(cls.collectionPage, {}, [className])}>
            <CollectionPageFavouriteCard id={id} />
        </Page>
    );
});

export default CollectionPage;
