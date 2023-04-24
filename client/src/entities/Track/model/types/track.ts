import { Album } from 'entities/Album';
import { Artist } from 'entities/Artist';
import { FavouriteTrack } from 'features/addTrackToFavourite';

export enum TrackSortField {
    CREATED = 'createdAt',
    LISTENS = 'listens',
    NAME = 'name',
    ALBUM = 'album',
    LENGTH = 'length',
}

export interface TrackData {
    id: number;
    name: string;
    text: string;
    file: string;
    date: string;
    listens: string;
    length: number;
    favourite_track: FavouriteTrack[];
}
export interface Track {
    id: number;
    trackId: number;
    track: TrackData;
    artistId: number;
    artist: Artist;
    albumId: number;
    album: Album;
    createdAt: string;
    updatedAt: string;
}
