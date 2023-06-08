import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Input } from 'shared/ui/Input/Input';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import cls from './SearchFilters.module.scss';
import { SearchCategoryType } from '../../model/types/searchCategoryType';
import { getSearchPageSearchValue } from '../../model/selectors/getSearchPageSearchValue';
import { getSearchPageCategory } from '../../model/selectors/getSearchPageCategory';
import { searchPageActions } from '../../model/slices/searchPageSlice';
import { fetchDataBySearchAndCategory } from '../../model/services/fetchDataBySearchAndCategory';

interface SearchFiltersProps {
    className?: string;
}

export const SearchFilters = memo((props: SearchFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('search');
    const dispatch = useAppDispatch();

    const searchCategories: TabItem<SearchCategoryType>[] = useMemo(
        () =>
            Object.values(SearchCategoryType).reduce(
                (acc: TabItem<SearchCategoryType>[], value, index) => {
                    return [...acc, { id: index, value, content: t(value) }];
                },
                [],
            ),
        [t],
    );

    const fetchData = useCallback(() => {
        dispatch(fetchDataBySearchAndCategory());
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const search = useSelector(getSearchPageSearchValue);
    const category = useSelector(getSearchPageCategory);

    const onSearchHandle = useCallback(
        (newSearch: string) => {
            dispatch(searchPageActions.setSearch(newSearch));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    const onCategorySwitch = useCallback(
        (newCategory: TabItem<SearchCategoryType>) => {
            dispatch(searchPageActions.setCategory(newCategory.value));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    return (
        <VStack
            className={classNames(cls.searchFilters, {}, [className])}
            gap="32"
            max
        >
            <Tabs<SearchCategoryType>
                tabs={searchCategories}
                value={category}
                onTabClick={onCategorySwitch}
            />
            <Input
                value={search}
                onChange={onSearchHandle}
                placeholder={t('Введите запрос')}
            />
        </VStack>
    );
});
