import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumsByGenreGenreId = (state: StateSchema) => state.mainPageAlbumsByGenre?.genreId || '1';
