/// <reference types="cypress" />
import { login } from './commands/login';
import { getByTestId } from './commands/common';
import * as profileCommands from './commands/profile';
import * as albumCommands from './commands/album';
import {
    createArtistDetails,
    removeArtistDetails,
    subscribeToArtist,
} from './commands/artist';

Cypress.Commands.add('login', login);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(albumCommands);
Cypress.Commands.add('createArtistDetails', createArtistDetails);
Cypress.Commands.add('removeArtistDetails', removeArtistDetails);
Cypress.Commands.add('subscribeToArtist', subscribeToArtist);

export {};
