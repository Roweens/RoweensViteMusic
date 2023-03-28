import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerDuration = (state: StateSchema) => state.player.duration;
