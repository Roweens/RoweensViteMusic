import { EntityState } from '@reduxjs/toolkit';
import { Track } from 'entities/Track';

export interface AlbumPageTracksSchema extends EntityState<Track> {
    isLoading?: boolean;
    error?: string;
}
