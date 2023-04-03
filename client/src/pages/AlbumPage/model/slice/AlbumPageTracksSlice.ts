import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Track, TrackSortField } from 'entities/Track';
import { SortOrder } from 'shared/types/SortOrder';
import { fetchTracksByAlbumId } from '../services/fetchTracksByAlbumId';
import { AlbumPageTracksSchema } from '../types/AlbumPageTracksSchema';

const albumTracksAdapter = createEntityAdapter<Track>({
    selectId: (track) => track.id,
});

export const getAlbumTracks = albumTracksAdapter.getSelectors<StateSchema>(
    (state) => state.albumPageTracks || albumTracksAdapter.getInitialState()
);

export const albumPageTracksSlice = createSlice({
    name: 'AlbumPageTracks',
    initialState: albumTracksAdapter.getInitialState<AlbumPageTracksSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        order: 'DESC',
        sort: TrackSortField.CREATED,
    }),
    reducers: {
        setSort: (state, action: PayloadAction<TrackSortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchTracksByAlbumId.fulfilled, (state, action: PayloadAction<Track[]>) => {
            state.isLoading = false;
            albumTracksAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchTracksByAlbumId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchTracksByAlbumId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: albumPageTracksSliceActions } = albumPageTracksSlice;
export const { reducer: AlbumPageTracksSliceReducer } = albumPageTracksSlice;
