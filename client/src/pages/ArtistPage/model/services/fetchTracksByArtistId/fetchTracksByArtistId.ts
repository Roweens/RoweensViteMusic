import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';

export const fetchTracksByArtistId = createAsyncThunk<
    Track[],
    string | undefined,
    ThunkConfig<string>
>('artust/fetchTracksByArtistId', async (artistId, { rejectWithValue, extra }) => {
    if (!artistId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Track[]>(`/tracks/artist/${artistId}`);

        if (!response.data) throw new Error();

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
