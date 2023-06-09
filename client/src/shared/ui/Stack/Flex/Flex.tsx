import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Mods } from 'shared/types/Mods';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32' | '64';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    between: cls.justifyBetween,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
};

const alignClasses: Record<FlexAlign, string> = {
    center: cls.alignCenter,
    end: cls.alignEnd,
    start: cls.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
    column: cls.directionColumn,
    row: cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
    64: cls.gap64,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        align = 'center',
        direction = 'row',
        justify = 'start',
        gap,
        max,
        ...otherProps
    } = props;

    const styles = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.flex, mods, styles)} {...otherProps}>
            {children}
        </div>
    );
};
