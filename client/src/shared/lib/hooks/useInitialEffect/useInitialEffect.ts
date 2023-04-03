import { useEffect } from 'react';

export function useInitialEffect(cb: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'Storybook') {
            cb();
        }
        return cb();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
