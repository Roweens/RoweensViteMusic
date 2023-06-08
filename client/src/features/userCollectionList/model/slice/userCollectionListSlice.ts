import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Artist } from 'entities/Artist';
import { Album } from 'entities/Album';
import { Track } from 'entities/Track';
import {
    UserCollectionListCategory,
    UserCollectionListSchema,
} from '../types/userCollectionListSchema';
import { fetchCollectionCategory } from '../services/fetchCollectionCategory/fetchCollectionCategory';

const initialState: UserCollectionListSchema = {
    category: 'Tracks',
    isLoading: false,
    error: undefined,
};

const userCollectionListSlice = createSlice({
    name: 'userCollectionListSlice',
    initialState,
    reducers: {
        setCategory: (
            state,
            action: PayloadAction<UserCollectionListCategory>,
        ) => {
            state.category = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(
            fetchCollectionCategory.fulfilled,
            (state, action: PayloadAction<Artist[] | Album[] | Track[]>) => {
                state.items = action.payload;
                state.isLoading = false;
            },
        );
        builder.addCase(fetchCollectionCategory.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchCollectionCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: userCollectionListReducer } = userCollectionListSlice;
export const { actions: userCollectionListActions } = userCollectionListSlice;
