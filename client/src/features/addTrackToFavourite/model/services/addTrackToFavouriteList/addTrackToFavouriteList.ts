import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { FavouriteTrack } from '../../types/favouriteTrack';

interface addToFavouriteProps {
    trackId?: string;
}

export const addToFavouriteList = createAsyncThunk<
    FavouriteTrack,
    addToFavouriteProps,
    ThunkConfig<string>
>(
    'addToFavourite/addToFavouriteList',
    async ({ trackId }, { extra, rejectWithValue, getState }) => {
        const user = getUserAuthData(getState());

        if (!user && !trackId) {
            return rejectWithValue('No id');
        }

        try {
            const response = await extra.api.get<FavouriteTrack>('/favourite/add/', {
                params: {
                    userId: user?.id,
                    trackId,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
