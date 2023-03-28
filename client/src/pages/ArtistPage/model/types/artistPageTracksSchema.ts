import { EntityState } from '@reduxjs/toolkit';
import { Track } from 'entities/Track';

export interface ArtistPageTracksSchema extends EntityState<Track> {
    isLoading?: boolean;
    error?: string;
}
