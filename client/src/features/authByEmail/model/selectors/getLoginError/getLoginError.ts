import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsError = (state: StateSchema) => state.login.error;
