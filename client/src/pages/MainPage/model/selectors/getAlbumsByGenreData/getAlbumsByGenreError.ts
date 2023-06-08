import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumsByGenreError = (state: StateSchema) =>
    state.mainPageAlbumsByGenre?.error;
