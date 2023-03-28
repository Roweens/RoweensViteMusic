import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false,
    error: undefined,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(loginByEmail.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByEmail.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByEmail.rejected, (state, action) => {
            state.email = '';
            state.password = '';
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
