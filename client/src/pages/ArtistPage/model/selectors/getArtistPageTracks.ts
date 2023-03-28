import { StateSchema } from 'app/providers/StoreProvider';

export const getArtistPageTracksIsLoading = (state: StateSchema) => state.artistPageTracks?.isLoading;
export const getArtistPageTracksError = (state: StateSchema) => state.artistPageTracks?.error;
