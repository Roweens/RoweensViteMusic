import { Album } from 'entities/Album';
import { Artist } from 'entities/Artist';

export interface TrackData {
    id: number;
    name: string;
    text: string;
    file: string;
    date: string;
    listens: string;
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
