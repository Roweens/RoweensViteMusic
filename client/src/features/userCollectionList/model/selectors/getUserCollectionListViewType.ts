import { StateSchema } from 'app/providers/StoreProvider';

export const getUserCollectionListViewType = (state: StateSchema) =>
    state.userCollectionList.viewType;
