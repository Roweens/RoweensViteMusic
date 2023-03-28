import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Album } from '../types/album';

export const fetchAlbumById = createAsyncThunk<Album, string, ThunkConfig<string>>(
    'album/fetchAlbumById',
    async (albumId, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Album>(`/album/${albumId}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
