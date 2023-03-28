import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Artist } from '../../types/artist';

export const fetchArtistById = createAsyncThunk<Artist, string, ThunkConfig<string>>(
    'artist/fetchArtistById',
    async (artistId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Artist>(`/artist/${artistId}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
