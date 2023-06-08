import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import cls from './LoginCard.module.scss';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginIsError } from '../../model/selectors/getLoginError/getLoginError';

interface LoginCardProps {
    className?: string;
}

export const LoginCard = memo((props: LoginCardProps) => {
    const { className } = props;

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginIsError);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginSubmit = useCallback(() => {
        dispatch(loginByEmail({ email, password }));
    }, [dispatch, email, password]);

    if (isLoading) {
        return (
            <div className={classNames(cls.loginCard, {}, [className])}>
                <div className={cls.card}>
                    <Loader />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.loginCard, {}, [className])}>
            <div className={cls.card}>
                <Text
                    title="Войти"
                    align={TextAlign.CENTER}
                    classname={cls.titleText}
                />

                <Input
                    focused
                    placeholder="Введите почту"
                    onChange={onChangeEmail}
                    value={email}
                    className={cls.loginInput}
                />
                <Input
                    placeholder="Введите пароль"
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                    className={cls.passwordInput}
                />
                <Button theme={ButtonTheme.SHADOW} onClick={onLoginSubmit}>
                    {t('Войти')}
                </Button>
                {error && (
                    <Text
                        text="Неверные данные для входа"
                        textTheme={TextTheme.ERROR}
                        classname={cls.errorText}
                    />
                )}
            </div>
        </div>
    );
});
