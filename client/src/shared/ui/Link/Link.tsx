import classNames from 'classnames';

import { memo, ReactNode } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import cls from './Link.module.scss';

interface CustomLinkProps extends LinkProps{
    children: ReactNode;
    className?: string;
}

export const Link = memo((props: CustomLinkProps) => {
    const {
        className = '', children, to, ...otherProps
    } = props;

    return (
        <RouterLink className={classNames(cls.Link, className)} to={to} {...otherProps}>
            {children}
        </RouterLink>
    );
});
