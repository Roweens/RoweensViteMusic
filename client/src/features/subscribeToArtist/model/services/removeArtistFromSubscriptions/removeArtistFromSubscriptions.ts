import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { SubscribedArtist } from '../../types/subscribedArtist';

interface removeArtistFromSubscriptionsProps {
    artistId?: string;
}

export const removeArtistFromSubscriptions = createAsyncThunk<
    SubscribedArtist,
    removeArtistFromSubscriptionsProps,
    ThunkConfig<string>
>(
    'subscribeToArtist/removeArtistFromSubscriptions',
    async ({ artistId }, { extra, rejectWithValue, getState }) => {
        const user = getUserAuthData(getState());

        if (!user && !artistId) {
            return rejectWithValue('No id');
        }

        try {
            const response = await extra.api.get<SubscribedArtist>('/favourite/remove/', {
                params: {
                    userId: user?.id,
                    artistId,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
