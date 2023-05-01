import {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AuthRoute } from './AuthRoute';
import { CustomRouteProps, RouteConfig } from '../config/routeConfig';

const AppRouter = () => {
    const privateRoutes = useCallback((route: CustomRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        if (route.authOnly) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<AuthRoute>{element}</AuthRoute>}
                />
            );
        }
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map(privateRoutes)}
            </Routes>
        </Suspense>
    );
};
export default memo(AppRouter);
