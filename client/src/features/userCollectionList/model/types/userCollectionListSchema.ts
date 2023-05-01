import { Artist } from 'entities/Artist';
import { Album } from 'entities/Album';
import { Track } from 'entities/Track';

export type UserCollectionListCategory = 'Albums' | 'Artists' | 'Tracks';

export interface UserCollectionListSchema {
    category: UserCollectionListCategory;
    items?: Artist[] | Album[] | Track[];
    isLoading: boolean;
    error?: string;
}
