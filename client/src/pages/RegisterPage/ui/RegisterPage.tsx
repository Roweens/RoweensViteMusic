import { memo } from 'react';
import classNames from 'classnames';
import { SignUpCard } from 'features/signUp';
import cls from './RegisterPage.module.scss';

interface RegisterPageProps {
  className?: string;
}

export const RegisterPage = memo((props: RegisterPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.RegisterPageWrapper, {}, [className])}>
            <SignUpCard />
        </div>
    );
});
