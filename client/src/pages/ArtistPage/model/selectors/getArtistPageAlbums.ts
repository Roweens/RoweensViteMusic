import { StateSchema } from 'app/providers/StoreProvider';

export const getArtistPageAlbumsIsLoading = (state: StateSchema) => state.artistPage?.albums.isLoading;
export const getArtistPageAlbumsError = (state: StateSchema) => state.artistPage?.albums.error;
