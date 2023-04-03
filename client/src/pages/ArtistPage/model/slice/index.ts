import { combineReducers } from '@reduxjs/toolkit';
import { ArtistPageSchema } from '../types';
import { artistPageTracksReducer } from './artistPageTracksSlice';
import { artistPageAlbumsReducer } from './artistPageAlbumsSlice';
import { artistPagePlaylistsReducer } from './artistPagePlaylistsSlice';

export const artistPageReducer = combineReducers<ArtistPageSchema>({
    tracks: artistPageTracksReducer,
    albums: artistPageAlbumsReducer,
    playlists: artistPagePlaylistsReducer,
});
