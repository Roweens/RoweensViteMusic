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

type CardPadding = '0' | '8' | '16' | '24' | '36';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    border?: string;
    children: ReactNode;
    theme?: CardTheme;
    withHoverEffect?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'padding_0',
    '8': 'padding_8',
    '16': 'padding_16',
    '24': 'padding_24',
    '36': 'padding_36',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        border,
        fullHeight,
        fullWidth,
        theme = CardTheme.CLEAN,
        withHoverEffect = true,
        padding = '16',
        ...otherProps
    } = props;

    const styles: CSSProperties = {
        borderRadius: border || '10px',
    };

    const mods: Mods = {
        [cls.hover]: withHoverEffect,
        [cls.fullHeight]: fullHeight,
        [cls.fullWidth]: fullWidth,
    };

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(cls.cardWrapper, mods, [
                className,
                cls[theme],
                cls[paddingClass],
            ])}
            style={styles}
            {...otherProps}
        >
            {children}
        </div>
    );
});
