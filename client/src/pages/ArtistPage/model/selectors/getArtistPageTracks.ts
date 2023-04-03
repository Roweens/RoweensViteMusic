import { StateSchema } from 'app/providers/StoreProvider';

export const getArtistPageTracksIsLoading = (state: StateSchema) => state.artistPage?.tracks.isLoading;
export const getArtistPageTracksError = (state: StateSchema) => state.artistPage?.tracks.error;
