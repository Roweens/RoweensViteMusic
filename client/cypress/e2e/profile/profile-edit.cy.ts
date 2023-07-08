let profileId: string;

describe('Profile page visit', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile page successfully loads', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('Profile page edit', () => {
        const newName = 'new';
        const newLastName = 'lastname';

        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastName,
        );
    });
});
