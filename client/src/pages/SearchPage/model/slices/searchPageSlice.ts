import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchPageSchema } from '../types/searchPageSchema';
import { SearchCategoryType } from '../types/searchCategoryType';
import {
    SearchDataType,
    fetchDataBySearchAndCategory,
} from '../services/fetchDataBySearchAndCategory';

const initialState: SearchPageSchema = {
    isLoading: false,
    error: undefined,
    category: SearchCategoryType.ALL,
    search: '',
    _inited: false,
};

export const searchPageSlice = createSlice({
    name: 'searchPageSlice',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setCategory: (state, action: PayloadAction<SearchCategoryType>) => {
            state.category = action.payload;
        },
        initPage: (state) => {
            state._inited = true;
        },
    },
    extraReducers(builder) {
        builder.addCase(
            fetchDataBySearchAndCategory.fulfilled,
            (state, action: PayloadAction<SearchDataType>) => {
                state.isLoading = false;
                state.data = action.payload;
            },
        );
        builder.addCase(fetchDataBySearchAndCategory.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchDataBySearchAndCategory.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export const { actions: searchPageActions } = searchPageSlice;
export const { reducer: searchPageReducer } = searchPageSlice;
