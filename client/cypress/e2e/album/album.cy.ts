let currentAlbumId: number;

describe('User navigates to album page', () => {
    beforeEach(() => {
        cy.removeAlbum(998);
        cy.login();
        cy.createAlbum().then((album) => {
            currentAlbumId = album.id;
            cy.visit(`album/${album.id}`);
        });
    });
    afterEach(() => {
        cy.removeAlbumFromFavourite(currentAlbumId).then(() => {
            cy.removeAlbum(currentAlbumId);
        });
    });

    it('Album details renders', () => {
        cy.getByTestId('AlbumDetails').should('exist');
    });
    it('Album tracks list renders', () => {
        cy.getByTestId('TrackList').should('exist');
        cy.getByTestId('TrackItemFull')
            .should('exist')
            .should('have.length.lessThan', 7);
    });

    it('Album list sort type changes', () => {
        cy.intercept('GET', `**/album/${currentAlbumId}**`).as('fetchTracks');
        cy.getByTestId('TrackList').should('exist');
        cy.getByTestId('SortOrderSelector.Trigger').click();
        cy.getByTestId('SortOrderSelector.Option.1').click();
        cy.wait('@fetchTracks').its('response.statusCode').should('equal', 200);
        cy.url().should('include', 'order=ASC');
    });

    it('Album list sort value changes', () => {
        cy.intercept('GET', `**/album/${currentAlbumId}**`).as('fetchTracks');
        cy.getByTestId('TrackList').should('exist');
        cy.getByTestId('SortValueSelector.Trigger').click();
        cy.getByTestId('SortValueSelector.Option.1').click();
        cy.wait('@fetchTracks').its('response.statusCode').should('equal', 200);
        cy.url().should('include', 'sort=album');
    });

    it('Add album to favourite is working', () => {
        cy.getByTestId('AlbumDetails').should('exist');
        cy.getByTestId('AddAlbumToFavButton').should('exist');
        cy.addAlbumToFavourite(currentAlbumId, 10);
        cy.reload();
        cy.getByTestId('RemoveAlbumFromFavButton').should('exist');
    });

    it('Add track to favourite is working', () => {
        cy.getByTestId('TrackList').should('exist');
        cy.addTrackToFavourite();
        cy.reload();
        cy.getByTestId('AddTrackToFavouriteButton')
            .first()
            .children('svg')
            .should(($icon) => {
                expect($icon).to.have.length(1);
                const className = $icon[0].className.baseVal;
                expect(className).to.contain('favIcon');
            });
    });
});
