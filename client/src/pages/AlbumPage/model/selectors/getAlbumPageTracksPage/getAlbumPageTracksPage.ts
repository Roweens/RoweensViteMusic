import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksPage = (state: StateSchema) =>
    state.albumPageTracks?.page ?? 1;
