import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerVolume = (state: StateSchema) => state.player.volume;
