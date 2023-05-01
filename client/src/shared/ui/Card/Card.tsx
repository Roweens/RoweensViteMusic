import classNames from 'classnames';
import {
    CSSProperties, HTMLAttributes, memo, ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

export enum CardTheme {
    CLEAN = 'clean',
    OUTLINED = 'outlined',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  border?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, border, theme = CardTheme.CLEAN, ...otherProps
    } = props;
    const { t } = useTranslation();

    const styles: CSSProperties = {
        borderRadius: border || '10px',
    };

    return (
        <div
            className={classNames(cls.cardWrapper, [className, cls[theme]])}
            style={styles}
            {...otherProps}
        >
            {children}
        </div>
    );
});
