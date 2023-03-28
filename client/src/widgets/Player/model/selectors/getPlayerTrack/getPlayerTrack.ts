import { StateSchema } from 'app/providers/StoreProvider';

export const getPlayerTrack = (state: StateSchema) => state.player.track;
