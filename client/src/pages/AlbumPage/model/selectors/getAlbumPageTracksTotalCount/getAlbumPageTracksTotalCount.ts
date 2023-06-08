import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksPageTotalCount = (state: StateSchema) =>
    state.albumPageTracks?.totalCount ?? 0;
