import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerLoop = (state: StateSchema) => state.player.loop;
