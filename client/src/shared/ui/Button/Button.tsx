import classNames from 'classnames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large'
}

export enum ButtonTheme {
    CLEAN = 'clean',
    OUTLINED = 'outlined',
    FILLED = 'filled',
    SHADOW = 'shadow'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  className?: string,
  theme?: ButtonTheme,
  size?:ButtonSize,
  disabled?: boolean
  squared?: boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINED,
        size = ButtonSize.MEDIUM,
        disabled,
        squared = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: squared,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, className, mods)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
