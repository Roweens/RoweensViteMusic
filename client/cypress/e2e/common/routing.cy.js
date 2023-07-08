import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Unauthorized', () => {
        it('No auth', () => {
            cy.visit('/');
            cy.get(selectByTestId('LoginPage')).should('exist');
        });

        it('Not Found', () => {
            cy.visit('/12321321');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Authorized', () => {
        beforeEach(() => {
            cy.login('admin@gmail.com', '12345');
        });

        it('Auth', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Album page', () => {
            cy.visit('/album/1');
            cy.get(selectByTestId('AlbumPage')).should('exist');
        });
        it('Artist page', () => {
            cy.visit('/artist/1');
            cy.get(selectByTestId('ArtistPage')).should('exist');
        });
        it('Profile page', () => {
            cy.visit('/profile/10');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
    });
});
