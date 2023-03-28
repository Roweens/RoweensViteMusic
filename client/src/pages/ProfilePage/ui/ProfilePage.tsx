import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import classNames from 'classnames';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Language } from 'entities/Language';
import {
    fetchProfileData,
    Gender,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validationErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{id: string}>();

    useEffect(() => {
        if (__PROJECT__ !== 'Storybook') {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ username: value }));
    }, [dispatch]);

    const onFirstnameChange = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ firstname: value }));
    }, [dispatch]);

    const onLastnameChange = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ lastname: value }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ age: Number(value) }));
    }, [dispatch]);

    const onGenderChange = useCallback((value: Gender) => {
        dispatch(profileActions.setFormData({ gender: value }));
    }, [dispatch]);

    const onCityChange = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ city: value }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ avatar: value }));
    }, [dispatch]);

    const onCurrencyChange = useCallback((value: Currency) => {
        dispatch(profileActions.setFormData({ currency: value }));
    }, [dispatch]);

    const onCountryChange = useCallback((value: Country) => {
        dispatch(profileActions.setFormData({ country: value }));
    }, [dispatch]);

    const onLanguageChange = useCallback((value: Language) => {
        dispatch(profileActions.setFormData({ language: value }));
    }, [dispatch]);

    return (
        <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
            <Page>
                <div className={classNames(cls.profilePage)}>
                    <ProfilePageHeader />
                    {validationErrors?.length && validationErrors.map((error) => <Text text={error} key={error} textTheme={TextTheme.ERROR} />)}
                    <ProfileCard
                        form={form}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onUsernameChange={onUsernameChange}
                        onFirstnameChange={onFirstnameChange}
                        onLastnameChange={onLastnameChange}
                        onAgeChange={onAgeChange}
                        onGenderChange={onGenderChange}
                        onCityChange={onCityChange}
                        onAvatarChange={onAvatarChange}
                        onCountryChange={onCountryChange}
                        onCurrencyChange={onCurrencyChange}
                        onLanguageChange={onLanguageChange}
                    />
                </div>
            </Page>
        </DynamicReducerLoader>
    );
});

export default ProfilePage;
