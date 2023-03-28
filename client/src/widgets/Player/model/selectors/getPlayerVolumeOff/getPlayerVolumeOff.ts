import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerVolumeOff = (state: StateSchema) => state.player.volumeOff;
