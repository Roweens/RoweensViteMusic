import { MutableRefObject, RefObject, useEffect } from 'react';

interface useScrollObserverProps {
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export const useScrollObserver = (props: useScrollObserverProps) => {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElementLink = wrapperRef.current;
        const triggerElementLink = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElementLink);
        }

        return () => {
            if (observer && triggerElementLink) {
                observer.unobserve(wrapperElementLink);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
