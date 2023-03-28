import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';

export const fetchTracksByAlbumId = createAsyncThunk<
    Track[],
    string | undefined,
    ThunkConfig<string>
>('album/fetchTracksByAlbumId', async (albumId, { rejectWithValue, extra }) => {
    if (!albumId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Track[]>(`/tracks/album/${albumId}`);

        if (!response.data) throw new Error();

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
