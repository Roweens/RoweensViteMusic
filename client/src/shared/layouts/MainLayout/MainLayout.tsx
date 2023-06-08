import { FC, ReactElement } from 'react';
import classNames from 'classnames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    bottom?: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
    const { className, content, header, sidebar, bottom } = props;

    return (
        <>
            <div className={classNames(cls.mainLayout, {}, [className])}>
                <div className={cls.sidebar}>{sidebar}</div>
                <div className={cls.mainContent}>
                    <div className={cls.header}>{header}</div>
                    <div className={cls.content}>{content}</div>
                </div>
            </div>
            <div className={cls.bottom}>{bottom}</div>
        </>
    );
};
