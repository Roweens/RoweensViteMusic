import { Album } from 'entities/Album';
import { AlbumCategory } from 'entities/Album/model/types/album';
import { Track } from 'entities/Track';

const defaultAlbum = {
    id: 998,
    title: 'Test album',
    description: 'testing cypress Album',
    category: AlbumCategory.ALBUM,
    img: 'IFeelLikeDirt.jpg',
    date: '30.09.2019',
    artistId: 1,
    genreId: 1,
};

const album_tracks = [
    {
        id: 995,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: 1,
    },
    {
        id: 996,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: 1,
    },
    {
        id: 997,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: 1,
    },
    {
        id: 998,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: 1,
    },
];

export const createAlbum = (album?: Album, tracks?: Track[]) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:5000/api/album/create',
            body: {
                album: album || defaultAlbum,
                tracks: tracks || album_tracks,
            },
        })
        .then((response) => response.body);

export const removeAlbum = (albumId: number) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:5000/api/album/delete/${albumId}`,
    });

export const addAlbumToFavourite = (albumId: number, userId: number = 10) =>
    cy.request({
        method: 'GET',
        url: `http://localhost:5000/api/favourite/add/?userId=${userId}&albumId=${albumId}`,
    });

export const addTrackToFavourite = (
    trackId: number = 995,
    userId: number = 10,
) =>
    cy.request({
        method: 'GET',
        url: `http://localhost:5000/api/favourite/remove/?userId=${userId}&trackId=${trackId}`,
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createAlbum(album?: Album, tracks?: Track[]): Chainable<Album>;
            removeAlbum(albumId: number): Chainable<void>;
            addAlbumToFavourite(
                albumId: number,
                userId?: number,
            ): Chainable<void>;
            addTrackToFavourite(
                trackId?: number,
                userId?: number,
            ): Chainable<void>;
        }
    }
}
