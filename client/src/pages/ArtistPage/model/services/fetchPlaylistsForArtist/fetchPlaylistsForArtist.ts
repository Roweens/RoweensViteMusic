import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Album } from 'entities/Album';

export const fetchPlaylistsByArtistId = createAsyncThunk<
    Album[],
    string | undefined,
    ThunkConfig<string>
>(
    'artist/fetchPlaylistsByArtistId',
    async (artistId, { rejectWithValue, extra }) => {
        if (!artistId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Album[]>(
                `/album/artist/${artistId}`,
                {
                    params: {
                        _limit: 9,
                        category: 'playlist',
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
