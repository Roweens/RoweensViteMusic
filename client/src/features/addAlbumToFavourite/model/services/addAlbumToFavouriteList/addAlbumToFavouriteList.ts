import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { FavouriteAlbum } from '../../types/favouriteAlbum';

interface addAlbumToFavouriteProps {
    albumId?: string;
}

export const addAlbumToFavouriteList = createAsyncThunk<
    FavouriteAlbum,
    addAlbumToFavouriteProps,
    ThunkConfig<string>
>(
    'addAlbumToFavourite/addAlbumToFavouriteList',
    async ({ albumId }, { extra, rejectWithValue, getState }) => {
        const user = getUserAuthData(getState());

        if (!user && !albumId) {
            return rejectWithValue('No id');
        }

        try {
            const response = await extra.api.get<FavouriteAlbum>('/favourite/add/', {
                params: {
                    userId: user?.id,
                    albumId,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
