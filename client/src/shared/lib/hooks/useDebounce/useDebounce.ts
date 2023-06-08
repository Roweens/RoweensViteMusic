import { useCallback, useEffect, useRef } from 'react';

export function useDebounce<T>(cb: (...args: T[]) => void, ms: number) {
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        return clearTimeout(timeoutRef.current);
    }, []);

    return useCallback(
        (...args: T[]) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                cb(...args);
            }, ms);
        },
        [cb, ms],
    );
}
