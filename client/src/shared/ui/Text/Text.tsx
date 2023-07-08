import classNames from 'classnames';
import { memo } from 'react';
import { Mods } from 'shared/types/Mods';
import cls from './Text.module.scss';

export enum TitleTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    APP = 'app',
    ERROR = 'error',
    SUCCESS = 'success',
}

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    APP = 'app',
    ERROR = 'error',
    SUCCESS = 'success',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface TextProps {
    title?: string;
    text?: string;
    titleTheme?: TitleTheme;
    textTheme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    classname?: string;
    bold?: boolean;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        textTheme = TextTheme.PRIMARY,
        titleTheme = TitleTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        bold = false,
        classname,
        'data-testid': dataTestId = 'Text',
    } = props;

    const mods: Mods = {
        [cls[align]]: true,
        [cls.bold]: bold,
    };

    return (
        <div
            className={classNames(cls.TextWrapper, mods, [
                classname,
                cls[size],
            ])}
        >
            {title && (
                <h5
                    className={classNames(cls.title, cls[titleTheme])}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </h5>
            )}
            {text && (
                <p
                    className={classNames(cls.text, cls[textTheme])}
                    data-testid={`${dataTestId}.Text`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
