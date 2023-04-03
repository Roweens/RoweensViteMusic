import { EntityState } from '@reduxjs/toolkit';
import { Album } from 'entities/Album';

export interface ArtistPagePlaylistsSchema extends EntityState<Album> {
    isLoading?: boolean;
    error?: string;
}
