import { StateSchema } from 'app/providers/StoreProvider';

export const getUserIsMounted = (state: StateSchema) => state.user.mounted;
