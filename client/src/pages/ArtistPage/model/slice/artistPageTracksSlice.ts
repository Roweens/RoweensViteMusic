import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';
import { fetchTracksByArtistId } from '../services/fetchTracksByArtistId/fetchTracksByArtistId';
import { ArtistPageTracksSchema } from '../types/artistPageTracksSchema';

const artistTracksAdapter = createEntityAdapter<Track>({
    selectId: (track) => track.id,
});

export const getArtistTracks = artistTracksAdapter.getSelectors<StateSchema>(
    (state) => state.artistPage?.tracks || artistTracksAdapter.getInitialState()
);

export const artistPageTracksSlice = createSlice({
    name: 'ArtistPageTracks',
    initialState: artistTracksAdapter.getInitialState<ArtistPageTracksSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchTracksByArtistId.fulfilled,
            (state, action: PayloadAction<Track[]>) => {
                state.isLoading = false;
                artistTracksAdapter.setAll(state, action.payload);
            }
        );
        builder.addCase(fetchTracksByArtistId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchTracksByArtistId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

// export const { actions: artistPageTracksActions } = artistPageTracksSlice;
export const { reducer: artistPageTracksReducer } = artistPageTracksSlice;
