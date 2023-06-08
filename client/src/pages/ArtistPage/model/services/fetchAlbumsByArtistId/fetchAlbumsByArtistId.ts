import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Album } from 'entities/Album';

export const fetchAlbumsByArtistId = createAsyncThunk<
    Album[],
    string,
    ThunkConfig<string>
>('artist/fetchAlbumsByArtistId', async (id, { rejectWithValue, extra }) => {
    if (!id) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Album[]>(`/album/artist/${id}`, {
            params: {
                _limit: 9,
            },
        });

        if (!response.data) throw new Error();

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
