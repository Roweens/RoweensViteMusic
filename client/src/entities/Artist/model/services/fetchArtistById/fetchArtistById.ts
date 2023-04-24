import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Artist } from '../../types/artist';

interface fetchArtistByIdProps {
    userId?: string;
    artistId?: string;
}

export const fetchArtistById = createAsyncThunk<Artist, fetchArtistByIdProps, ThunkConfig<string>>(
    'artist/fetchArtistById',
    async ({ artistId, userId }, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Artist>(`/artist/${artistId}`, {
                params: {
                    userId,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
