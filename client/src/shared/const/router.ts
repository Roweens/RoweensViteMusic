export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    LOGIN = 'login',
    REGISTER = 'register',
    ARTIST = 'artist',
    FAVOURITE = 'favourite',
    ALBUM = 'album',
    SEARCH = 'search',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.ARTIST]: '/artist/',
    [AppRoutes.FAVOURITE]: '/favourite/',
    [AppRoutes.ALBUM]: '/album/',
    [AppRoutes.NOT_FOUND]: '/*',
};
