import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { FavouriteAlbum } from '../../types/favouriteAlbum';

interface removeAlbumFromFavouriteProps {
    albumId?: string;
}

export const removeAlbumFromFavouriteList = createAsyncThunk<
    FavouriteAlbum,
    removeAlbumFromFavouriteProps,
    ThunkConfig<string>
>(
    'addAlbumToFavourite/removeAlbumFromFavouriteList',
    async ({ albumId }, { extra, rejectWithValue, getState }) => {
        const user = getUserAuthData(getState());

        if (!user && !albumId) {
            return rejectWithValue('No id');
        }

        try {
            const response = await extra.api.get<FavouriteAlbum>('/favourite/remove/', {
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
