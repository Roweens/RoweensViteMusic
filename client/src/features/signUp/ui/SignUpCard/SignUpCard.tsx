import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { signUpActions, signUpReducer } from '../../model/slice/signUpSlice';
import {
    getSignUpEmail, getSignUpError, getSignUpFirstname, getSignUpIsLoading, getSignUpPassword, getSignUpUsername,
} from '../../model/selectors/getSignUpData';
import { signUp } from '../../model/services/signUp/signUp';
import cls from './SignUpCard.module.scss';

interface LoginCardProps {
  className?: string;
}

const reducers: ReducersList = {
    signUp: signUpReducer,
};

export const SignUpCard: FC<LoginCardProps> = (props) => {
    const { className } = props;

    const email = useSelector(getSignUpEmail);
    const password = useSelector(getSignUpPassword);
    const username = useSelector(getSignUpUsername);
    const firstname = useSelector(getSignUpFirstname);
    const isLoading = useSelector(getSignUpIsLoading);
    const error = useSelector(getSignUpError);

    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onChangeEmail = useCallback((value: string) => {
        dispatch(signUpActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(signUpActions.setPassword(value));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(signUpActions.setUsername(value));
    }, [dispatch]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(signUpActions.setFirstname(value));
    }, [dispatch]);

    const onSignUpSubmit = useCallback(() => {
        dispatch(signUp({
            email, password, username, firstname,
        }));
    }, [dispatch, email, password, username, firstname]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            {isLoading ? (
                <div className={classNames(cls.loginCard, {}, [className])}>
                    <div className={cls.card}>
                        <Loader />
                    </div>
                </div>
            ) : (
                <div className={classNames(cls.loginCard, {}, [className])}>
                    <div className={cls.card}>
                        <Text title="Войти" align={TextAlign.CENTER} classname={cls.titleText} />

                        <Input
                            focused
                            placeholder="Введите почту"
                            onChange={onChangeEmail}
                            value={email}
                            className={cls.loginInput}
                        />
                        <Input
                            focused
                            placeholder="Псевдоним"
                            onChange={onChangeUsername}
                            value={username}
                            className={cls.usernameInput}
                        />
                        <Input
                            focused
                            placeholder="Ваше имя"
                            onChange={onChangeFirstname}
                            value={firstname}
                            className={cls.usernameInput}
                        />
                        <Input
                            placeholder="Введите пароль"
                            type="password"
                            onChange={onChangePassword}
                            value={password}
                            className={cls.passwordInput}
                        />

                        <Button theme={ButtonTheme.SHADOW} onClick={onSignUpSubmit}>{t('Зарегистрироваться')}</Button>
                        {error && (
                            <Text
                                text="Неверные данные для входа"
                                textTheme={TextTheme.ERROR}
                                classname={cls.errorText}
                            />
                        )}
                    </div>
                </div>
            )}

        </DynamicReducerLoader>
    );
};
