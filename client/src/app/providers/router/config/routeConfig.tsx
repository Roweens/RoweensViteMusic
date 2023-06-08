import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { LoginPage } from 'pages/LoginPage';
import { AlbumPage } from 'pages/AlbumPage';
import { ArtistPage } from 'pages/ArtistPage';
import { RegisterPage } from 'pages/RegisterPage';
import { AppRoutes, RoutePath } from 'shared/const/router';
import { SearchPage } from 'pages/SearchPage';

export type CustomRouteProps = RouteProps & {
    authOnly?: boolean;
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
    [AppRoutes.SEARCH]: {
        path: RoutePath[AppRoutes.SEARCH],
        element: <SearchPage />,
        authOnly: true,
    },
    [AppRoutes.FAVOURITE]: {
        path: `${RoutePath[AppRoutes.FAVOURITE]}:id`,
        element: <NotFoundPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
