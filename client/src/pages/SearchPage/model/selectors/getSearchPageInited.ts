import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchPageInited = (state: StateSchema) => state.searchPage?._inited;
