import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Page } from 'widgets/Page';
import {
    DynamicReducerLoader,
    ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import cls from './SearchPage.module.scss';
import { SearchFilters } from '../SearchFilters/SearchFilters';
import { searchPageReducer } from '../../model/slices/searchPageSlice';
import { SearchPageList } from '../SearchPageList/SearchPageList';
import { initSearchPage } from '../../model/services/initSearchPage';

interface SearchPageProps {
    className?: string;
}

const reducers: ReducersList = {
    searchPage: searchPageReducer,
};

const SearchPage = memo((props: SearchPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initSearchPage(searchParams));
    });

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.searchPage, {}, [className])}>
                <VStack gap="32">
                    <SearchFilters />
                    <SearchPageList />
                </VStack>
            </Page>
        </DynamicReducerLoader>
    );
});

export default SearchPage;
