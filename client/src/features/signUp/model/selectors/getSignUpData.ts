import { StateSchema } from 'app/providers/StoreProvider';

export const getSignUpUsername = (state: StateSchema) => state.signUp?.username;
export const getSignUpEmail = (state: StateSchema) => state.signUp?.email;
export const getSignUpPassword = (state: StateSchema) => state.signUp?.password;
export const getSignUpFirstname = (state: StateSchema) =>
    state.signUp?.firstname;
export const getSignUpIsLoading = (state: StateSchema) =>
    state.signUp?.isLoading;
export const getSignUpError = (state: StateSchema) => state.signUp?.error;
