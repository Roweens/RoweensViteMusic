import { memo } from 'react';
import classNames from 'classnames';
import { LoginCard } from 'features/authByEmail';
import { Page } from 'widgets/Page';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;

    return (
        <Page
            className={classNames(cls.loginPageWrapper, {}, [className])}
            data-testid="LoginPage"
        >
            <LoginCard />
        </Page>
    );
});

export default LoginPage;
