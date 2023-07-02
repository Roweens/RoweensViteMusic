import { Artist } from 'entities/Artist';

export interface FavouriteAlbum {
    id: string;
    favouriteId: string;
    albumId: string;
}

export interface AlbumTracks {
    id: number;
    createdAt: string;
    updatedAt: string;
    albumId: number;
    trackId: number;
    artistId: number;
}

export enum AlbumCategory {
    ALBUM = 'album',
    PLAYLIST = 'playlist',
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
    genreId: number;
    category: AlbumCategory;
    favourite_album: FavouriteAlbum[];
}
