import { useEffect } from 'react';

export function useInitialEffect(cb: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'Storybook') {
            console.log('effect');
            cb();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
