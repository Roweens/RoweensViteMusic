import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Album } from 'entities/Album';
import { fetchPlaylistsByArtistId } from '../services/fetchPlaylistsForArtist/fetchPlaylistsForArtist';
import { ArtistPagePlaylistsSchema } from '../types/artistPagePlaylistsSchema';

const artistPlaylistsAdapter = createEntityAdapter<Album>({
    selectId: (album) => album.id,
});

export const getArtistPlaylists =
    artistPlaylistsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.artistPage?.playlists ||
            artistPlaylistsAdapter.getInitialState(),
    );

export const artistPagePlaylistsSlice = createSlice({
    name: 'ArtistPagePlaylists',
    initialState:
        artistPlaylistsAdapter.getInitialState<ArtistPagePlaylistsSchema>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchPlaylistsByArtistId.fulfilled,
            (state, action: PayloadAction<Album[]>) => {
                state.isLoading = false;
                artistPlaylistsAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchPlaylistsByArtistId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchPlaylistsByArtistId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

// export const { actions: artistPageTracksActions } = artistPageTracksSlice;
export const { reducer: artistPagePlaylistsReducer } = artistPagePlaylistsSlice;
