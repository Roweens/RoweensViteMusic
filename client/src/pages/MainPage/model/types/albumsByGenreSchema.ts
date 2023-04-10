import { Album } from 'entities/Album';

export interface AlbumsByGenreSchema {
    data: Album[];
    isLoading?: boolean;
    error?: string;
    genreId: string;
}
