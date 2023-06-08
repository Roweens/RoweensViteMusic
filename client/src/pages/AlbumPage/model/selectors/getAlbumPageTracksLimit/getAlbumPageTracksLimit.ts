import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksLimit = (state: StateSchema) =>
    state.albumPageTracks?._limit ?? 7;
