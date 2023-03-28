import classNames from 'classnames';
import { CSSProperties, memo } from 'react';
import { useTranslation } from 'react-i18next';
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
  title?: string,
  text?: string,
  titleTheme?: TitleTheme,
  textTheme?: TextTheme,
  align?: TextAlign,
  size?: TextSize,
  classname?: string,
  weight?: number;
  bold?: boolean
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        textTheme = TextTheme.PRIMARY,
        titleTheme = TitleTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        weight = 400,
        bold = false,
        classname,
    } = props;

    const mods: Mods = {
        [cls[align]]: true,
        [cls[size]]: true,
        [cls.bold]: bold,
    };

    // const styles: CSSProperties = {
    //     fontWeight: weight,
    // };

    return (
        <div className={classNames(cls.TextWrapper, mods, classname)}>
            {title && <h5 className={classNames(cls.title, cls[titleTheme])}>{title}</h5>}
            {text && <p className={classNames(cls.text, cls[textTheme])}>{text}</p>}
        </div>
    );
});
