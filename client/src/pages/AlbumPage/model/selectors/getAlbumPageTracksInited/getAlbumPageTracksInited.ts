import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumPageTracksInited = (state: StateSchema) => state.albumPageTracks?._inited;
