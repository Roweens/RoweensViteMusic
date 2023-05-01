import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Artist } from '../../types/artist';

interface fetchArtistByIdProps {
    artistId?: string;
}

export const fetchArtistById = createAsyncThunk<Artist, fetchArtistByIdProps, ThunkConfig<string>>(
    'artist/fetchArtistById',
    async ({ artistId }, { extra, rejectWithValue, getState }) => {
        try {
            const authData = getUserAuthData(getState());
            const response = await extra.api.get<Artist>(`/artist/${artistId}`, {
                params: {
                    userId: authData?.id,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
