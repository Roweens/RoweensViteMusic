import { StateSchema } from 'app/providers/StoreProvider';

export const getUserCollectionListIsLoading = (state: StateSchema) =>
    state.userCollectionList.isLoading;
