import { memo, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children: ReactNode;
}

export const Page = memo((props:PageProps) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.page, {}, [className])}>
            {children}
        </div>
    );
});
