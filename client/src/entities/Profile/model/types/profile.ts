import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Language } from 'entities/Language';

export type Gender = 'Male' | 'Female';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    gender?: Gender;
    currency?: Currency;
    country?: Country;
    language?: Language;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
