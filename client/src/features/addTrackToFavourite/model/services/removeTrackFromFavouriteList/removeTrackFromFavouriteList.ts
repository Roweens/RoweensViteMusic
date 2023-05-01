import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { FavouriteTrack } from '../../types/favouriteTrack';

interface removeFromFavouriteProps {
    trackId?: string;
}

export const removeFromFavouriteList = createAsyncThunk<
    FavouriteTrack,
    removeFromFavouriteProps,
    ThunkConfig<string>
>(
    'addToFavourite/removeFromFavouriteList',
    async ({ trackId }, { extra, rejectWithValue, getState }) => {
        const user = getUserAuthData(getState());

        if (!user && !trackId) {
            return rejectWithValue('No id');
        }

        try {
            const response = await extra.api.get<FavouriteTrack>('/favourite/remove/', {
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
    },
);
