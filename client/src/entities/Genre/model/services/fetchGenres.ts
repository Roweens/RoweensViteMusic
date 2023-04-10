import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Genre } from '../types/genre';

export const fetchGenres = createAsyncThunk<Genre[], void, ThunkConfig<string>>(
    'genre/fetchGenres',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Genre[]>('/genre/');

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
