import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksOrder = (state: StateSchema) =>
    state.albumPageTracks?.order ?? 'DESC';
