import { StateSchema } from 'app/providers/StoreProvider';

export const getArtistData = (state: StateSchema) => state.artist?.data;
export const getArtistIsLoading = (state: StateSchema) => state.artist?.isLoading;
export const getArtistError = (state: StateSchema) => state.artist?.error;
