import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAlbumById } from '../services/fetchAlbumById';
import { Album } from '../types/album';

import { AlbumSchema } from '../types/albumSchema';

const initialState: AlbumSchema = {
    isLoading: false,
    error: undefined,
};

export const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchAlbumById.fulfilled,
            (state, action: PayloadAction<Album>) => {
                state.isLoading = false;
                state.data = action.payload;
            },
        );
        builder.addCase(fetchAlbumById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchAlbumById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: albumActions } = albumSlice;
export const { reducer: albumReducer } = albumSlice;
