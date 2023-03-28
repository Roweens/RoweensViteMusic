import classNames from 'classnames';
import { getUserIsLoading, userActions } from 'entities/User';
import { getUserIsMounted } from 'entities/User/model/selectors/getUserIsMounted/getUserIsMounted';
import { verifyToken } from 'entities/User/model/services/verifyToken/verifyToken';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { Player } from 'widgets/Player';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from '../app/providers/router';

export function App() {
    const dispatch = useAppDispatch();
    const isMounted = useSelector(getUserIsMounted);
    const isLoading = useSelector(getUserIsLoading);

    useEffect(() => {
        dispatch(verifyToken());
    }, [dispatch]);

    return (

        <div className={classNames('app')}>
            <Suspense fallback={<Loader />}>
                <div className="main-container">
                    <SideBar />
                    <div className="page-container">
                        <Navbar />
                        {isMounted && <AppRouter />}
                    </div>
                </div>
                <Player />
            </Suspense>
        </div>

    );
}
