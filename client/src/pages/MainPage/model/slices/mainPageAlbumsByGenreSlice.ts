import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Album } from 'entities/Album';
import { AlbumsByGenreSchema } from '../types/albumsByGenreSchema';
import { fetchAlbumsByGenre } from '../services/fetchAlbumsByGenre';

const initialState: AlbumsByGenreSchema = {
    isLoading: false,
    error: undefined,
    data: [],
    genreId: '1',
};

export const mainPageAlbumsByGenreSlice = createSlice({
    name: 'albumsByGenre',
    initialState,
    reducers: {
        setGenreId: (state, action: PayloadAction<string>) => {
            state.genreId = String(action.payload);
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAlbumsByGenre.fulfilled, (state, action: PayloadAction<Album[]>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAlbumsByGenre.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchAlbumsByGenre.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: mainPageAlbumsByGenreActions } = mainPageAlbumsByGenreSlice;
export const { reducer: mainPageAlbumsByGenreReducer } = mainPageAlbumsByGenreSlice;
