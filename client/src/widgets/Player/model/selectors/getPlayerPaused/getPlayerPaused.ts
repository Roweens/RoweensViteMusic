import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerPaused = (state: StateSchema) => state.player.paused;
