import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/const/router';
import { MainLayout } from 'shared/layouts/MainLayout';
import { Navbar } from 'widgets/Navbar';
import { Player } from 'widgets/Player';
import { SideBar } from 'widgets/SideBar';

export function AuthRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        return (
            <Navigate to={RoutePath.login} state={{ from: location }} replace />
        );
    }

    return (
        <MainLayout
            sidebar={<SideBar />}
            header={<Navbar />}
            content={children}
            bottom={<Player />}
        />
    );
}
