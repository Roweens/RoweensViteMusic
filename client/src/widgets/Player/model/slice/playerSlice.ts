import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from 'entities/Track';

import { PlayerSchema } from '../types/PlayerSchema';

const initialState: PlayerSchema = {
    track: null,
    volume: 50,
    volumeOff: false,
    paused: true,
    playTime: 0,
    duration: 0,
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPaused: (state, action: PayloadAction<boolean>) => {
            state.paused = action.payload;
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        setVolumeOff: (state, action: PayloadAction<boolean>) => {
            state.volumeOff = action.payload;
        },
        setPlayTime: (state, action: PayloadAction<number>) => {
            state.playTime = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        setTrack: (state, action: PayloadAction<Track>) => {
            state.track = action.payload;
        },
    },
});

export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
