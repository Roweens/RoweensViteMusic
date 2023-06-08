import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchPageData = (state: StateSchema) => state.searchPage?.data;
