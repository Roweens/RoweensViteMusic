import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Album } from 'entities/Album';

export const fetchAlbumsByGenre = createAsyncThunk<Album[], string, ThunkConfig<string>>(
    'mainPage/fetchAlbumsByGenre',
    async (genreId, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Album[]>('/album/all', {
                params: {
                    _limit: 9,
                    genreId,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
