import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';
import { getUserAuthData } from 'entities/User';

export const fetchTracksByArtistId = createAsyncThunk<
    Track[],
    string | undefined,
    ThunkConfig<string>
>(
    'artist/fetchTracksByArtistId',
    async (artistId, { rejectWithValue, extra, getState }) => {
        if (!artistId) {
            return rejectWithValue('error');
        }

        try {
            const user = getUserAuthData(getState());
            const response = await extra.api.get<Track[]>(
                `/tracks/artist/${artistId}`,
                {
                    params: {
                        userId: user?.id,
                    },
                },
            );

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
