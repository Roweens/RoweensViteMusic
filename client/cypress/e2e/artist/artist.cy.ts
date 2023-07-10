import { Track } from 'entities/Track';
import { defaultArtistDetails } from '../../support/commands/artist';
import { Album, AlbumCategory } from 'entities/Album/model/types/album';

let currentArtistId: number;

const defaultAlbum = {
    id: 998,
    title: 'Test album',
    description: 'testing cypress Album',
    category: AlbumCategory.ALBUM,
    img: 'IFeelLikeDirt.jpg',
    date: '30.09.2019',
    artistId: defaultArtistDetails.id,
    genreId: 1,
} as Album;

const album_tracks = [
    {
        id: 995,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: defaultArtistDetails.id,
    },
    {
        id: 996,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: defaultArtistDetails.id,
    },
    {
        id: 997,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: defaultArtistDetails.id,
    },
    {
        id: 998,
        albumId: defaultAlbum.id,
        trackId: 4,
        artistId: defaultArtistDetails.id,
    },
] as Track[];

describe('User navigates to artist page', () => {
    beforeEach(() => {
        cy.removeAlbum(defaultAlbum.id).then(() => {
            cy.removeArtistDetails(999);
        });
        cy.login();
        cy.createArtistDetails().then((artist) => {
            cy.createAlbum(defaultAlbum, album_tracks).then(() => {
                currentArtistId = artist.id;
                cy.visit(`artist/${artist.id}`);
            });
        });
    });
    afterEach(() => {
        cy.removeArtistDetails(currentArtistId).then(() => {
            cy.removeAlbum(defaultAlbum.id).then(() => {
                cy.removeArtistDetails(currentArtistId);
            });
        });
    });

    it('Artist Details renders', () => {
        cy.getByTestId('ArtistDetails').should('exist');
    });

    it('Artist Tracks list renders', () => {
        cy.getByTestId('TrackList').should('exist');
    });

    it('Artist Album list renders', () => {
        cy.getByTestId('ArtistPageAlbums').should('exist');
    });

    it('Add artist to favourite is working', () => {
        cy.getByTestId('ArtistDetails').should('exist');
        cy.getByTestId('SubscribeToArtistBtn').should('exist');
        cy.subscribeToArtist(currentArtistId, 10);
        cy.reload();
        cy.getByTestId('UnsubscribeFromArtistBtn').should('exist');
    });
});
