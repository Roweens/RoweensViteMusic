import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
    },
    extraReducers(builder) {
        builder.addCase(
            fetchProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            },
        );
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(
            updateProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            },
        );
        builder.addCase(updateProfileData.pending, (state) => {
            state.validateError = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
        });
    },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
