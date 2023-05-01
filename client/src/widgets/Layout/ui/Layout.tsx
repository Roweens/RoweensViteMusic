import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { SideBar } from '@/widgets/SideBar';
import { Player } from '@/widgets/Player';
import cls from './Layout.module.scss';
import { Navbar } from '@/widgets/Navbar';
import { useAppDispatch } from '@/shared/lib/useAppDispatch/useAppDispatch';

interface LayoutProps {
    className?: string;
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
    const { className, children } = props;
    const dispatch = useAppDispatch();

    return (

        <div className={classNames(cls.layout, {}, [className])}>
            <SideBar />
            <div className={cls.content}>
                <Navbar />
                {children}
            </div>
            <Player />
        </div>
    );
};
