import { Track } from 'entities/Track';

export interface PlayerSchema {
    track: Track | null;
    duration?: number;
    volume: number;
    volumeOff: boolean;
    playTime: number;
    paused: boolean;
}
