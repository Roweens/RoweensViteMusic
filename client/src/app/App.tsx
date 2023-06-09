import classNames from 'classnames';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { getUserIsMounted, verifyToken } from 'entities/User';
import { AppLoaderLayout } from 'shared/layouts/AppLoaderLayout';
import { AppRouter } from '../app/providers/router';

export function App() {
    const dispatch = useAppDispatch();
    const isMounted = useSelector(getUserIsMounted);

    useEffect(() => {
        dispatch(verifyToken());
    }, [dispatch]);

    if (!isMounted) {
        return (
            <div className={classNames('app')}>
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <div className={classNames('app')}>
            <Suspense fallback={<Loader />}>
                {isMounted && <AppRouter />}
            </Suspense>
        </div>
    );
}
