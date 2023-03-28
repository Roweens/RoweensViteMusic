import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import jwtDecode from 'jwt-decode';
import { User, userActions } from 'entities/User';
import { AUTH_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    email?: string;
    password?: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByEmail',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        const { email, password } = authData;

        if (!email && !password) {
            return rejectWithValue('No data');
        }

        try {
            const response = await extra.api.post<User>('user/signin', authData);

            if (!response.data) throw new Error();
            const { token } = response.data;
            localStorage.setItem(AUTH_LOCALSTORAGE_KEY, token);
            const data: User = jwtDecode(token);
            const { username, id } = data;

            dispatch(userActions.setAuthData({ id, token, username: 'CognusZxc' }));

            extra.navigate('/');

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
