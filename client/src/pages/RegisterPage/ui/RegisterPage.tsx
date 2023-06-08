import { memo } from 'react';
import classNames from 'classnames';
import { SignUpCard } from 'features/signUp';
import { Page } from 'widgets/Page';
import cls from './RegisterPage.module.scss';

interface RegisterPageProps {
    className?: string;
}

export const RegisterPage = memo((props: RegisterPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.RegisterPageWrapper, {}, [className])}>
            <SignUpCard />
        </Page>
    );
});
