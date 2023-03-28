import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerPlayTime = (state: StateSchema) => state.player.playTime;
