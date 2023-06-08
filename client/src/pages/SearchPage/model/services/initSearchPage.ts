import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getSearchPageInited } from '../selectors/getSearchPageInited';
import { searchPageActions } from '../slices/searchPageSlice';
import { fetchDataBySearchAndCategory } from './fetchDataBySearchAndCategory';
import { SearchCategoryType } from '../types/searchCategoryType';

export const initSearchPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('searchPage/initSearchPage', async (searchParams, { getState, dispatch }) => {
    const isInited = getSearchPageInited(getState());

    if (!isInited) {
        dispatch(
            searchPageActions.setSearch(
                (searchParams.get('search') as string) ?? '',
            ),
        );
        dispatch(
            searchPageActions.setCategory(
                (searchParams.get('category') as SearchCategoryType) ??
                    SearchCategoryType.ALL,
            ),
        );

        dispatch(searchPageActions.initPage());
        dispatch(fetchDataBySearchAndCategory());
    }
});
