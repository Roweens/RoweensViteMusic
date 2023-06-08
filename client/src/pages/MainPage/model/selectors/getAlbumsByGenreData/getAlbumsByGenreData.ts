import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumsByGenreData = (state: StateSchema) =>
    state.mainPageAlbumsByGenre?.data || [];
