import { EntityState } from '@reduxjs/toolkit';
import { Album } from 'entities/Album';

export interface ArtistPageAlbumsSchema extends EntityState<Album> {
    isLoading?: boolean;
    error?: string;
}
