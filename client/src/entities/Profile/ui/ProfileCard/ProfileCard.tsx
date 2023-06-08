import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text, TextAlign, TextTheme, TitleTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Language, LanguageSelect } from 'entities/Language';
import { Selector, SelectorTheme } from 'shared/ui/Selector/Selector';
import { OptionsType } from 'shared/types/OptionsType';
import cls from './ProfileCard.module.scss';
import { Gender, Profile } from '../../model/types/profile';

interface ProfileCardProps {
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onUsernameChange?: (value: string) => void;
    onFirstnameChange?: (value: string) => void;
    onLastnameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onGenderChange?: (value: Gender) => void;
    onCityChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCurrencyChange?: (value: Currency) => void;
    onCountryChange?: (value: Country) => void;
    onLanguageChange?: (value: Language) => void;
}

const genderOptions: OptionsType[] = [
    {
        id: 1,
        label: 'Male',
        value: 'Male',
    },
    {
        id: 2,
        label: 'Female',
        value: 'Female',
    },
];

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        form,
        readonly,
        isLoading,
        error,
        onUsernameChange,
        onFirstnameChange,
        onLastnameChange,
        onAgeChange,
        onGenderChange,
        onCityChange,
        onAvatarChange,
        onCountryChange,
        onCurrencyChange,
        onLanguageChange,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true })}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [cls.error],
                )}
            >
                <Text
                    title={t('Произошла неожиданная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    titleTheme={TitleTheme.ERROR}
                    textTheme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard)}>
            <div className={cls.input}>
                <Text title={t('Имя пользователя:')} />
                <Input
                    onChange={onUsernameChange}
                    value={form?.username}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ваше имя:')} />
                <Input
                    onChange={onFirstnameChange}
                    value={form?.firstname}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ваша фамилия:')} />
                <Input
                    onChange={onLastnameChange}
                    value={form?.lastname}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ваш пол:')} />
                <Selector
                    onChange={onGenderChange}
                    options={genderOptions}
                    label={t('Выберите пол')}
                    value={form?.gender}
                    theme={SelectorTheme.FILLED}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ваш город:')} />
                <Input
                    onChange={onCityChange}
                    value={form?.city}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ваш возраст:')} />
                <Input
                    onChange={onAgeChange}
                    type="number"
                    value={form?.age}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Выбранная валюта:')} />
                <CurrencySelect
                    value={form?.currency}
                    onChange={onCurrencyChange}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ваша страна:')} />
                <CountrySelect
                    value={form?.country}
                    onChange={onCountryChange}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Отображаемый язык:')} />
                <LanguageSelect
                    value={form?.language}
                    onChange={onLanguageChange}
                    readOnly={readonly}
                />
            </div>
            <div className={cls.input}>
                <Text title={t('Ссылка на аватар:')} />
                <Input
                    onChange={onAvatarChange}
                    value={form?.avatar}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
