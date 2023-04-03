import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { DropDown, OptionsType, ThemeDropDown } from 'shared/ui/DropDown/DropDown';
import { SortOrder } from 'shared/types/SortOrder';
import { TrackSortField } from '../../model/types/track';
import cls from './TrackSortSelector.module.scss';

interface TrackSortSelectorProps {
   className?: string;
   order: SortOrder;
   sort: TrackSortField;
   onOrderChange: (newOrder: SortOrder) => void;
   onSortChange: (newSort: TrackSortField) => void;
}

const orderOptions:OptionsType[] = [
    {
        id: 1,
        value: 'ASC',
        label: 'По возрастанию',
    },
    {
        id: 2,
        value: 'DESC',
        label: 'По убыванию',
    },
];

const sortOptions:OptionsType[] = [
    {
        id: 1,
        value: TrackSortField.ALBUM,
        label: 'Альбом',
    },
    {
        id: 2,
        value: TrackSortField.CREATED,
        label: 'Дата создания',
    },
    {
        id: 3,
        value: TrackSortField.LENGTH,
        label: 'Длительность',
    },
    {
        id: 4,
        value: TrackSortField.LISTENS,
        label: 'Прослушивания',
    },
    {
        id: 5,
        value: TrackSortField.NAME,
        label: 'Название',
    },
];

export const TrackSortSelector = memo((props:TrackSortSelectorProps) => {
    const {
        className, onOrderChange, onSortChange, order, sort,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.trackSortSelector, {}, [className])}>
            <DropDown options={orderOptions} state={order} onClick={onOrderChange} theme={ThemeDropDown.FILLED} />
            <DropDown options={sortOptions} state={sort} onClick={onSortChange} theme={ThemeDropDown.FILLED} />
        </div>
    );
});
