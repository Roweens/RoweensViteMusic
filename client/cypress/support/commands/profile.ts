export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('ProfilePageHeader.EditBtn').click({ force: true });
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('ProfilePageHeader.SaveBtn').click({ force: true });
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:5000/api/profile/${profileId}`,
        body: {
            id: '3',
            firstname: 'test',
            lastname: 'testLast',
            age: 465,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'test',
            avatar: '',
            language: 'ru',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
