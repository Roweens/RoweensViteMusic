import { EntityState } from '@reduxjs/toolkit';
import { Track, TrackSortField } from 'entities/Track';
import { SortOrder } from 'shared/types/SortOrder';

export interface AlbumPageTracksSchema extends EntityState<Track> {
    isLoading?: boolean;
    error?: string;
    sort: TrackSortField;
    order: SortOrder;
}
