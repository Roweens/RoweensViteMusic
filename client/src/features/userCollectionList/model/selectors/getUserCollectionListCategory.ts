import { StateSchema } from 'app/providers/StoreProvider';

export const getUserCollectionListCategory = (state: StateSchema) => state.userCollectionList.category || 'Tracks';
