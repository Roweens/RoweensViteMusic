import { FC, memo } from 'react';
import classNames from 'classnames';
import { LoginCard } from 'features/authByEmail';
import { Page } from 'shared/ui/Page/Page';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
  className?: string;
}

export const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.loginPageWrapper, {}, [className])}>
            <LoginCard />
        </div>
    );
});
