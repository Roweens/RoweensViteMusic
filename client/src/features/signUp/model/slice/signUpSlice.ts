import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUp } from '../services/signUp/signUp';
import { SignUpSchema } from '../types/signUpSchema';

const initialState: SignUpSchema = {
    isLoading: false,
    error: undefined,
};

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setFirstname: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(signUp.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(signUp.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.email = '';
            state.password = '';
            state.username = '';
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: signUpActions } = signUpSlice;
export const { reducer: signUpReducer } = signUpSlice;
