import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksIsLoading = (state: StateSchema) =>
    state.albumPageTracks?.isLoading;
