import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

import { verifyToken } from '../services/verifyToken/verifyToken';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    mounted: false,
    error: undefined,
    isLoading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        setIsMounted: (state, action: PayloadAction<boolean>) => {
            state.mounted = action.payload;
        },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
        //     if (user) {
        //         state.authData = JSON.parse(user);
        //     }
        //     state.mounted = true;
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_LOCALSTORAGE_KEY);
        },
    },
    extraReducers(builder) {
        builder.addCase(
            verifyToken.fulfilled,
            (state, action: PayloadAction<User | void>) => {
                if (action.payload) {
                    state.authData = action.payload;
                }
                state.mounted = true;
                state.isLoading = false;
                state.error = undefined;
            },
        );
        builder.addCase(verifyToken.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(verifyToken.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
