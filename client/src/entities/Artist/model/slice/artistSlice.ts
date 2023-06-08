import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArtistById } from '../services/fetchArtistById/fetchArtistById';

import { Artist, ArtistSliceSchema } from '../types/artist';

const initialState: ArtistSliceSchema = {
    isLoading: false,
    error: undefined,
};

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchArtistById.fulfilled,
            (state, action: PayloadAction<Artist>) => {
                state.isLoading = false;
                state.data = action.payload;
            },
        );
        builder.addCase(fetchArtistById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArtistById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: artistActions } = artistSlice;
export const { reducer: artistReducer } = artistSlice;
