import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerFastPlay = (state: StateSchema) =>
    state.player.fastPlay || false;
