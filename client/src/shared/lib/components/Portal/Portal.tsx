import { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children, element }: { children: ReactNode, element?: HTMLElement }) => {
    const ref = useRef<HTMLElement | null>(element || null);

    useEffect(() => {
        ref.current = element || document.body;
    }, [element]);

    if (ref.current) return ReactDOM.createPortal(children, ref.current);
    return null;
};
