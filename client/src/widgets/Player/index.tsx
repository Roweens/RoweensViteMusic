export { Player } from './ui/Player/Player';
export type { PlayerSchema } from './model/types/PlayerSchema';
export { playerReducer, playerActions } from './model/slice/playerSlice';
export { getPlayerPaused } from './model/selectors/getPlayerPaused/getPlayerPaused';
export { PlayButton } from './ui/PlayButton/PlayButton';
export { PauseButton } from './ui/PauseButton/PauseButton';
export { getPlayerTrack } from './model/selectors/getPlayerTrack/getPlayerTrack';
