import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';
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
    }),
    reducers: {},
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

// export const { actions: AlbumPageTracksSliceActions } = AlbumPageTracksSlice;
export const { reducer: AlbumPageTracksSliceReducer } = albumPageTracksSlice;
