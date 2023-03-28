import { memo } from 'react';
import classNames from 'classnames';
import { Page } from 'shared/ui/Page/Page';
import { SignUpCard } from 'features/signUp';
import cls from './RegisterPage.module.scss';

interface RegisterPageProps {
  className?: string;
}

export const RegisterPage = memo((props: RegisterPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.RegisterPageWrapper, {}, [className])}>
            <Page>
                <SignUpCard />
            </Page>
        </div>
    );
});
