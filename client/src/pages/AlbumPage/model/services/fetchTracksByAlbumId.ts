import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Track, TrackSortField } from 'entities/Track';
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';
import { SortOrder } from 'shared/types/SortOrder';
import { getUserAuthData } from 'entities/User';
import { getAlbumPageTracksSort } from '../selectors/getAlbumPageTracksSort/getAlbumPageTracksSort';
import { getAlbumPageTracksOrder } from '../selectors/getAlbumPageTracksOrder/getAlbumPageTracksOrder';
import { albumPageTracksSliceActions } from '../slice/AlbumPageTracksSlice';

interface FetchTracksByAlbumIdProps {
    albumId?: string;
    queryParams?: URLSearchParams;
}

export const fetchTracksByAlbumId = createAsyncThunk<
    Track[],
    FetchTracksByAlbumIdProps,
    ThunkConfig<string>
>(
    'album/fetchTracksByAlbumId',
    async ({ albumId, queryParams }, { rejectWithValue, extra, getState, dispatch }) => {
        if (!albumId) {
            return rejectWithValue('no id');
        }

        dispatch(albumPageTracksSliceActions.setOrder(queryParams?.get('order') as SortOrder ?? 'DESC'));
        dispatch(albumPageTracksSliceActions.setSort(queryParams?.get('sort') as TrackSortField ?? TrackSortField.CREATED));

        const sort = getAlbumPageTracksSort(getState());
        const order = getAlbumPageTracksOrder(getState());

        try {
            addQueryParams({
                sort,
                order,
            });

            const user = getUserAuthData(getState());
            const response = await extra.api.get<Track[]>(`/tracks/album/${albumId}`, {
                params: {
                    userId: user?.id,
                    sort,
                    order,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
