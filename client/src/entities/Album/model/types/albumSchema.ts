import { Album } from './album';

export interface AlbumSchema {
    isLoading?: boolean;
    error?: string;
    data?: Album;
}
