import { Artist } from 'entities/Artist';

export interface AlbumTracks {
    id: number;
    createdAt: string;
    updatedAt: string;
    albumId: number;
    trackId: number;
    artistId: number;
}
export interface Album {
    id: number;
    title: string;
    description: string;
    img: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    artistId: number;
    artist: Artist;
    album_tracks: AlbumTracks[];
}
