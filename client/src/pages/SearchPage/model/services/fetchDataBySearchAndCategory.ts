import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { Track } from 'entities/Track';
import { Artist } from 'entities/Artist';
import { Album } from 'entities/Album';
import { Profile } from 'entities/Profile';
import { getSearchPageCategory } from '../selectors/getSearchPageCategory';
import { getSearchPageSearchValue } from '../selectors/getSearchPageSearchValue';

export interface SearchDataType {
    tracks?: Track[];
    artists?: Artist[];
    albums?: Album[];
    playlists?: Album[];
    profiles?: Profile[];
}

export const fetchDataBySearchAndCategory = createAsyncThunk<
    SearchDataType,
    void,
    ThunkConfig<string>
>(
    'searchPage/fetchDataBySearchAndCategory',
    async (_, { rejectWithValue, extra, getState }) => {
        const category = getSearchPageCategory(getState());
        const search = getSearchPageSearchValue(getState());

        try {
            addQueryParams({
                category,
                search,
            });
            const response = await extra.api.get<SearchDataType>('/search/', {
                params: {
                    search,
                    category,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
