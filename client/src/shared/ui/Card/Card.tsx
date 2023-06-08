import classNames from 'classnames';
import { CSSProperties, HTMLAttributes, memo, ReactNode } from 'react';
import { Mods } from 'shared/types/Mods';
import cls from './Card.module.scss';

export enum CardTheme {
    CLEAN = 'clean',
    OUTLINED = 'outlined',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    border?: string;
    children: ReactNode;
    theme?: CardTheme;
    withHoverEffect?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        border,
        theme = CardTheme.CLEAN,
        withHoverEffect = true,
        ...otherProps
    } = props;

    const styles: CSSProperties = {
        borderRadius: border || '10px',
    };

    const mods: Mods = {
        [cls.hover]: withHoverEffect,
    };

    return (
        <div
            className={classNames(cls.cardWrapper, mods, [
                className,
                cls[theme],
            ])}
            style={styles}
            {...otherProps}
        >
            {children}
        </div>
    );
});
