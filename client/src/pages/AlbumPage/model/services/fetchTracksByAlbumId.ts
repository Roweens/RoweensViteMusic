import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Track } from 'entities/Track';
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';
import { getUserAuthData } from 'entities/User';
import { getAlbumPageTracksSort } from '../selectors/getAlbumPageTracksSort/getAlbumPageTracksSort';
import { getAlbumPageTracksOrder } from '../selectors/getAlbumPageTracksOrder/getAlbumPageTracksOrder';
import { getAlbumPageTracksPage } from '../selectors/getAlbumPageTracksPage/getAlbumPageTracksPage';
import { getAlbumPageTracksLimit } from '../selectors/getAlbumPageTracksLimit/getAlbumPageTracksLimit';

interface FetchTracksByAlbumIdProps {
    albumId?: string;
    replace?: boolean;
}

export const fetchTracksByAlbumId = createAsyncThunk<
    { count: number; rows: Track[] },
    FetchTracksByAlbumIdProps,
    ThunkConfig<string>
>(
    'album/fetchTracksByAlbumId',
    async ({ albumId }, {
        rejectWithValue, extra, getState, dispatch,
    }) => {
        if (!albumId) {
            return rejectWithValue('no id');
        }

        const sort = getAlbumPageTracksSort(getState());
        const order = getAlbumPageTracksOrder(getState());
        const page = getAlbumPageTracksPage(getState());
        const _limit = getAlbumPageTracksLimit(getState());

        try {
            addQueryParams({
                sort,
                order,
            });

            const user = getUserAuthData(getState());
            const response = await extra.api.get<{ count: number; rows: Track[] }>(
                `/tracks/album/${albumId}`,
                {
                    params: {
                        userId: user?.id,
                        sort,
                        order,
                        _limit,
                        page,
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
