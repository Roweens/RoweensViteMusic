import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Album } from '../types/album';

export const fetchAlbumById = createAsyncThunk<Album, string, ThunkConfig<string>>(
    'album/fetchAlbumById',
    async (albumId, { rejectWithValue, extra, getState }) => {
        try {
            const user = getUserAuthData(getState());
            const response = await extra.api.get<Album>(`/album/single/${albumId}`, {
                params: {
                    userId: user?.id,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
