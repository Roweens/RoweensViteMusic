import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumData = (state: StateSchema) => state.album?.data;
export const getAlbumIsLoading = (state: StateSchema) => state.album?.isLoading;
export const getAlbumError = (state: StateSchema) => state.album?.error;
