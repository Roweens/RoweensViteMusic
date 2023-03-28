import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksError = (state: StateSchema) => state.albumPageTracks?.error;
