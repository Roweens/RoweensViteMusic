import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { SubscribedArtist } from '../../types/subscribedArtist';

interface SubscribeProps {
    artistId?: string;
}

export const addArtistToSubscriptions = createAsyncThunk<
    SubscribedArtist,
    SubscribeProps,
    ThunkConfig<string>
>(
    'subscribeToArtist/addArtistToSubscriptions',
    async ({ artistId }, { extra, rejectWithValue, getState }) => {
        const user = getUserAuthData(getState());

        if (!user && !artistId) {
            return rejectWithValue('No id');
        }

        try {
            const response = await extra.api.get<SubscribedArtist>('/favourite/add/', {
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
