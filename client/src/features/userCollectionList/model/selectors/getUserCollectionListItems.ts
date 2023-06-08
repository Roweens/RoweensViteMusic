import { StateSchema } from 'app/providers/StoreProvider';

export const getUserCollectionListItems = (state: StateSchema) =>
    state.userCollectionList.items;
