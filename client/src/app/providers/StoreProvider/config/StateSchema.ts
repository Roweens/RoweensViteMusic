import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AlbumSchema } from 'entities/Album';
import { ArtistSliceSchema } from 'entities/Artist';
import { GenresSliceSchema } from 'entities/Genre';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByEmail';
import { SignUpSchema } from 'features/signUp';
import { UserCollectionListSchema } from 'features/userCollectionList';
import { AlbumPageTracksSchema } from 'pages/AlbumPage';
import { ArtistPageSchema } from 'pages/ArtistPage';
import { AlbumsByGenreSchema } from 'pages/MainPage';
import { SearchPageSchema } from 'pages/SearchPage';
import { rtkApi } from 'shared/api/rtkApi';
import { PlayerSchema } from 'widgets/Player';

export interface StateSchema {
    user: UserSchema;
    login: LoginSchema;
    player: PlayerSchema;
    userCollectionList: UserCollectionListSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    album?: AlbumSchema;
    albumPageTracks?: AlbumPageTracksSchema;
    profile?: ProfileSchema;
    artist?: ArtistSliceSchema;
    artistPage?: ArtistPageSchema;
    signUp?: SignUpSchema;
    genres?: GenresSliceSchema;
    mainPageAlbumsByGenre?: AlbumsByGenreSchema;
    searchPage?: SearchPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
