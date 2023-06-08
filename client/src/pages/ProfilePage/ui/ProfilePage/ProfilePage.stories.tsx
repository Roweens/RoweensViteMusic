import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Language } from 'entities/Language';
import { Themes } from 'shared/const/theme';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

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

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [StoreDecorator({ profile: { form: data } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Themes.DARK),
    StoreDecorator({ profile: { form: data } }),
];
