import classNames from 'classnames';
import {
    FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Portal } from 'shared/lib/components/Portal/Portal';
import { useMount } from 'shared/lib/hooks/useMount/useMount';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import cls from './Modal.module.scss';

interface ModalProps {
className?: string;
  children: ReactNode
  isVisible: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        children, isVisible, onClose, className,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();
    const { mounted } = useMount({ opened: isVisible, setState: setIsClosing });

    const onCloseHandler = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isVisible) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isVisible, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.visible]: mounted,
        [cls.isClosing]: isClosing,
    };

    if (!mounted) {
        return null;
    }

    return (
        <Portal element={document.body}>
            <div className={classNames(cls.overlay, mods)} onClick={onCloseHandler} id={theme}>
                <div className={classNames(cls.modal, mods, [className])} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
