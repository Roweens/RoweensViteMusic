import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Artist } from 'entities/Artist';
import { Album } from 'entities/Album';
import { Track } from 'entities/Track';
import { getUserCollectionListCategory } from '../../selectors/getUserCollectionListCategory';

export const fetchCollectionCategory = createAsyncThunk<
    Artist[] | Album[] | Track[],
    void,
    ThunkConfig<string>
>('userCollectionList/fetchCollectionCategory', async (_, { extra, rejectWithValue, getState }) => {
    const user = getUserAuthData(getState());
    const category = getUserCollectionListCategory(getState());

    if (!user) {
        return rejectWithValue('No id');
    }

    try {
        let response;

        if (category === 'Albums') {
            response = await extra.api.get<Album[]>(`/album/user/${user.id}`);
        }

        if (category === 'Artists') {
            response = await extra.api.get<Artist[]>(`/artist/user/${user.id}`);
        }

        if (category === 'Tracks') {
            response = await extra.api.get<Track[]>(`/tracks/user/${user.id}`);
        }

        if (!response) throw new Error();

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
