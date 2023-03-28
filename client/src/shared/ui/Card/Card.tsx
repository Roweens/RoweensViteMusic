import classNames from 'classnames';
import { CSSProperties, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  border?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, border,
    } = props;
    const { t } = useTranslation();

    const styles: CSSProperties = {
        borderRadius: border || '10px',
    };

    return (
        <div className={classNames(cls.cardWrapper, [className])} style={styles}>
            {children}
        </div>
    );
});
