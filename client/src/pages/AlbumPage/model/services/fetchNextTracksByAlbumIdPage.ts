import { createAsyncThunk } from '@reduxjs/toolkit';
import { totalPages } from 'shared/lib/utils/totalPages';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { albumPageTracksSliceActions } from '../slice/AlbumPageTracksSlice';
import { getAlbumPageTracksPage } from '../selectors/getAlbumPageTracksPage/getAlbumPageTracksPage';
import { getAlbumPageTracksLimit } from '../selectors/getAlbumPageTracksLimit/getAlbumPageTracksLimit';
import { fetchTracksByAlbumId } from './fetchTracksByAlbumId';

import { getAlbumPageTracksPageTotalCount } from '../selectors/getAlbumPageTracksTotalCount/getAlbumPageTracksTotalCount';

export const fetchNextTracksByAlbumIdPage = createAsyncThunk<
    void,
    string | undefined,
    ThunkConfig<string>
>(
    'album/fetchNextTracksByAlbumIdPage',
    async (albumId, {
        rejectWithValue, extra, getState, dispatch,
    }) => {
        if (!albumId) {
            return rejectWithValue('no id');
        }

        const page = getAlbumPageTracksPage(getState());
        const totalCount = getAlbumPageTracksPageTotalCount(getState());
        const _limit = getAlbumPageTracksLimit(getState());

        const totalPageCount = totalPages(totalCount, _limit);
        const hasMore = page <= totalPageCount;

        if (hasMore) {
            dispatch(albumPageTracksSliceActions.setPage(page + 1));
            dispatch(fetchTracksByAlbumId({ albumId }));
        }
    },
);
