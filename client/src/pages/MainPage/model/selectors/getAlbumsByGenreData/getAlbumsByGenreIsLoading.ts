import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumsByGenreIsLoading = (state: StateSchema) =>
    state.mainPageAlbumsByGenre?.isLoading;
