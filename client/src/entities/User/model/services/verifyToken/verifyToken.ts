import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authApi } from 'shared/api/api';
import jwtDecode from 'jwt-decode';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AUTH_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User } from '../../types/user';
import { userActions } from '../../slice/userSlice';

export const verifyToken = createAsyncThunk<User | void, void, ThunkConfig<string>>(
    'user/verifyToken',
    async (_, { rejectWithValue, dispatch }) => {
        dispatch(userActions.setIsMounted(false));
        const user = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
        if (user) {
            try {
                const response = await $authApi.get<{ token: string }>('user/verify');
                console.log('123');

                if (!response.data) throw new Error();

                const { token } = response.data;

                localStorage.setItem(AUTH_LOCALSTORAGE_KEY, token);
                const data: User = jwtDecode(token);

                const { username, id } = data;

                return { username: 'CognusZxc', token, id };
            } catch (error) {
                return rejectWithValue('error');
            }
        }
        return;
    }
);
