import { StateSchema } from 'app/providers/StoreProvider';
import { SearchCategoryType } from '../types/searchCategoryType';

export const getSearchPageCategory = (state: StateSchema) =>
    state.searchPage?.category || SearchCategoryType.ALL;
