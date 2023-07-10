import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { SortOrder } from 'shared/types/SortOrder';
import { Selector, SelectorTheme } from 'shared/ui/Selector/Selector';
import { OptionsType } from 'shared/types/OptionsType';
import { TrackSortField } from '../../model/types/track';
import cls from './TrackSortSelector.module.scss';

interface TrackSortSelectorProps {
    className?: string;
    order: SortOrder;
    sort: TrackSortField;
    onOrderChange: (newOrder: SortOrder) => void;
    onSortChange: (newSort: TrackSortField) => void;
}

export const TrackSortSelector = memo((props: TrackSortSelectorProps) => {
    const { className, onOrderChange, onSortChange, order, sort } = props;
    const { t } = useTranslation('album');

    const sortOptions = useMemo<OptionsType[]>(
        () => [
            {
                id: 1,
                value: TrackSortField.ALBUM,
                label: t('Альбом'),
            },
            {
                id: 2,
                value: TrackSortField.CREATED,
                label: t('Дата создания'),
            },
            {
                id: 3,
                value: TrackSortField.LENGTH,
                label: t('Длительность'),
            },
            {
                id: 4,
                value: TrackSortField.LISTENS,
                label: t('Прослушивания'),
            },
            {
                id: 5,
                value: TrackSortField.NAME,
                label: t('Название'),
            },
        ],
        [t],
    );

    const orderOptions = useMemo<OptionsType[]>(
        () => [
            {
                id: 1,
                value: 'ASC',
                label: t('По возрастанию'),
            },
            {
                id: 2,
                value: 'DESC',
                label: t('По убыванию'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.trackSortSelector, {}, [className])}>
            <Selector
                options={orderOptions}
                value={order}
                onChange={onOrderChange}
                theme={SelectorTheme.FILLED}
                label={t('Порядок сортировки')}
                data-testid="SortOrderSelector"
            />
            <Selector
                options={sortOptions}
                value={sort}
                onChange={onSortChange}
                theme={SelectorTheme.FILLED}
                label={t('Значение для сортировки')}
                data-testid="SortValueSelector"
            />
        </div>
    );
});
