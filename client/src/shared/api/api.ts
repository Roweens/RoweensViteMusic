import axios, { InternalAxiosRequestConfig } from 'axios';
import { AUTH_LOCALSTORAGE_KEY } from '../const/localStorage';

export const $api = axios.create({
    baseURL: __API_URL__,
});

export const $authApi = axios.create({
    baseURL: __API_URL__,
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    config!.headers!.authorization = `Bearer ${localStorage.getItem(
        AUTH_LOCALSTORAGE_KEY,
    )}`;
    return config;
};

$authApi.interceptors.request.use(authInterceptor);
