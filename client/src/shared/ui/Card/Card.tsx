import classNames from 'classnames';
import {
    CSSProperties, HtmlHTMLAttributes, memo, ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement>{
  className?: string;
  border?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, border, ...otherProps
    } = props;
    const { t } = useTranslation();

    const styles: CSSProperties = {
        borderRadius: border || '10px',
    };

    return (
        <div
            className={classNames(cls.cardWrapper, [className])}
            style={styles}
            {...otherProps}
        >
            {children}
        </div>
    );
});
