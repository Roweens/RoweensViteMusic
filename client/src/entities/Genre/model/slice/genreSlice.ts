import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Genre, GenresSliceSchema } from '../types/genre';
import { fetchGenres } from '../services/fetchGenres';

const genreAdapter = createEntityAdapter<Genre>({
    selectId: (genre) => genre.id,
});

export const getGenres = genreAdapter.getSelectors<StateSchema>(
    (state) => state.genres || genreAdapter.getInitialState(),
);

export const genresSlice = createSlice({
    name: 'genreSlice',
    initialState: genreAdapter.getInitialState<GenresSliceSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchGenres.fulfilled,
            (state, action: PayloadAction<Genre[]>) => {
                state.isLoading = false;
                genreAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchGenres.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchGenres.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

// export const { actions: genreSliceActions } = genresSlice;
export const { reducer: genreSliceReducer } = genresSlice;
