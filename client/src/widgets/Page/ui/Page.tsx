import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { useScrollObserver } from 'shared/lib/hooks/useScrollObserver/useScrollObserver';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollIntersection?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollIntersection } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useScrollObserver({
        wrapperRef,
        triggerRef,
        callback: onScrollIntersection,
    });

    return (
        <main
            className={classNames(cls.page, {}, [className])}
            ref={wrapperRef}
        >
            {children}
            {onScrollIntersection ? (
                <div ref={triggerRef} className={cls.triggerElement} />
            ) : null}
        </main>
    );
});
