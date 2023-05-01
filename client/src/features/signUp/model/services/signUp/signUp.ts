import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from 'entities/User';

interface SignUpProps {
    email?: string;
    password?: string;
    firstname?: string;
    username?: string;
}

export const signUp = createAsyncThunk<User, SignUpProps, ThunkConfig<string>>(
    'signUp',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        const {
            email, password, username, firstname,
        } = authData;

        if (!email && !password && !username && !firstname) {
            return rejectWithValue('No data');
        }

        try {
            const response = await extra.api.post<User>('user/signup', authData);

            if (!response.data) throw new Error();

            extra.navigate('/login');

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
