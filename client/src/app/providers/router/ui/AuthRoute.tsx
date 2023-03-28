import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function AuthRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
    }

    return children;
}
