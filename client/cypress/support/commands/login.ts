import jwtDecode from 'jwt-decode';
import { AUTH_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';

export const login = (
    email: string = 'admin@gmail.com',
    password: string = '12345',
) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:5000/api/user/signin',
            body: {
                email,
                password,
            },
        })
        .then(({ body }) => {
            const { token } = body;
            window.localStorage.setItem(AUTH_LOCALSTORAGE_KEY, token);
            const data: User = jwtDecode(token);
            return data;
        });
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>;
        }
    }
}
