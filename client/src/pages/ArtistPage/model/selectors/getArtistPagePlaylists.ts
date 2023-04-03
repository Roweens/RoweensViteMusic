import { StateSchema } from 'app/providers/StoreProvider';

export const getArtistPagePlaylistsIsLoading = (state: StateSchema) => state.artistPage?.playlists.isLoading;
export const getArtistPagePlaylistsError = (state: StateSchema) => state.artistPage?.playlists.error;
