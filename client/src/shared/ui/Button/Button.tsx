import classNames from 'classnames';
import { ComponentPropsWithRef, ComponentType } from 'react';
import cls from './Button.module.scss';

export enum ButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export enum ButtonTheme {
    CLEAN = 'clean',
    OUTLINED = 'outlined',
    FILLED = 'filled',
    SHADOW = 'shadow',
}

type ButtonElements = 'button' | 'a';

type ButtonAdditionalProps<Type extends ButtonElements | ComponentType> =
    Type extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[Type]
        : ComponentPropsWithRef<Type>;

type ButtonProps<Type extends ButtonElements | ComponentType> = {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    squared?: boolean;
    disabled?: boolean;
    as?: Type;
} & ButtonAdditionalProps<Type>;

export const Button = <
    Type extends ButtonElements | ComponentType<any> = 'button',
>(
    props: ButtonProps<Type>,
) => {
    const { className, as, theme, size, squared, disabled, ...otherProps } =
        props;

    const Component = as || 'button';

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: squared,
        [cls.disabled]: disabled,
    };

    const componentProps = {
        ...otherProps,
        className: classNames(cls.Button, mods, className ?? ''),
    };

    return <Component {...componentProps} />;
};
