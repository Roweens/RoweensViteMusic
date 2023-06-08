import { Track } from 'entities/Track';
import { Artist } from 'entities/Artist';
import { Album } from 'entities/Album';
import { Profile } from 'entities/Profile';
import { SearchCategoryType } from './searchCategoryType';

export interface SearchPageSchema {
    error?: string;
    isLoading: boolean;
    search: string;
    category: SearchCategoryType;
    data?: {
        tracks?: Track[];
        artists?: Artist[];
        albums?: Album[];
        playlists?: Album[];
        profiles?: Profile[];
    };
    _inited: boolean;
}
