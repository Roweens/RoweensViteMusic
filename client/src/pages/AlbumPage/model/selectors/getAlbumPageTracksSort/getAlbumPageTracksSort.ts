import { StateSchema } from 'app/providers/StoreProvider';
import { TrackSortField } from 'entities/Track';

export const getAlbumPageTracksSort = (state: StateSchema) => state.albumPageTracks?.sort ?? TrackSortField.CREATED;
