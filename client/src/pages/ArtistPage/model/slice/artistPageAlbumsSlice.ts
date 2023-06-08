import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Album } from 'entities/Album';
import { ArtistPageAlbumsSchema } from '../types/artistPageAlbumsSchema';
import { fetchAlbumsByArtistId } from '../services/fetchAlbumsByArtistId/fetchAlbumsByArtistId';

const artistAlbumsAdapter = createEntityAdapter<Album>({
    selectId: (album) => album.id,
});

export const getArtistAlbums = artistAlbumsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.artistPage?.albums || artistAlbumsAdapter.getInitialState(),
);

export const artistPageAlbumsSlice = createSlice({
    name: 'ArtistPageAlbums',
    initialState: artistAlbumsAdapter.getInitialState<ArtistPageAlbumsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchAlbumsByArtistId.fulfilled,
            (state, action: PayloadAction<Album[]>) => {
                state.isLoading = false;
                artistAlbumsAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchAlbumsByArtistId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchAlbumsByArtistId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

// export const { actions: artistPageTracksActions } = artistPageTracksSlice;
export const { reducer: artistPageAlbumsReducer } = artistPageAlbumsSlice;
