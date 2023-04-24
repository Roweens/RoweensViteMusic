import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { LoginPage } from 'pages/LoginPage';
import { AlbumPage } from 'pages/AlbumPage';
import { ArtistPage } from 'pages/ArtistPage';
import { RegisterPage } from 'pages/RegisterPage';
import { CollectionPage } from 'pages/CollectionPage';

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  LOGIN = 'login',
  REGISTER = 'register',
  ARTIST = 'artist',
  COLLECTION = 'collection',
  FAVOURITE = 'favourite',
  ALBUM = 'album',
  NOT_FOUND = 'not_found',
}

export type CustomRouteProps = RouteProps & {
    authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.ARTIST]: '/artist/',
    [AppRoutes.COLLECTION]: '/collection/',
    [AppRoutes.FAVOURITE]: '/favourite/',
    [AppRoutes.ALBUM]: '/album/',
    [AppRoutes.NOT_FOUND]: '/*',
};

export const RouteConfig: Record<AppRoutes, CustomRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath[AppRoutes.LOGIN],
        element: <LoginPage />,
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath[AppRoutes.REGISTER],
        element: <RegisterPage />,
    },
    [AppRoutes.ALBUM]: {
        path: `${RoutePath[AppRoutes.ALBUM]}:id`,
        element: <AlbumPage />,
        authOnly: true,
    },
    [AppRoutes.ARTIST]: {
        path: `${RoutePath[AppRoutes.ARTIST]}:id`,
        element: <ArtistPage />,
        authOnly: true,
    },
    [AppRoutes.COLLECTION]: {
        path: `${RoutePath[AppRoutes.COLLECTION]}:id`,
        element: <CollectionPage />,
        authOnly: true,
    },
    [AppRoutes.FAVOURITE]: {
        path: `${RoutePath[AppRoutes.FAVOURITE]}:id`,
        element: <CollectionPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },

};
