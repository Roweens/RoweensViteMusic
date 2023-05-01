import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Language } from 'entities/Language';
import { Themes } from 'shared/const/theme';
import { ProfilePageHeader } from './ProfilePageHeader';

export default {
    title: 'pages/ProfilePage/ProfilePageHeader',
    component: ProfilePageHeader,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePageHeader>;

const data: Profile = {
    firstname: 'Тимур',
    lastname: 'Григорян',
    age: 23,
    gender: 'Male',
    currency: Currency.RUB,
    country: Country.RUSSIA,
    language: Language.RU,
    city: 'Moscow',
    username: 'admin123',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

const Template: ComponentStory<typeof ProfilePageHeader> = () => <ProfilePageHeader />;

export const ReadOnly = Template.bind({});

ReadOnly.args = {};
ReadOnly.decorators = [StoreDecorator({ profile: { readonly: true } })];

export const Editing = Template.bind({});
Editing.args = {};
Editing.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ profile: { readonly: false } })];
