import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Language } from 'entities/Language';
import { Themes } from 'shared/const/theme';
import { Profile } from '../../model/types/profile';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

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

export const Primary = Template.bind({});

Primary.args = {
    form: data,
};
Primary.decorators = [StoreDecorator({ login: { email: 'testEmail@gmail.com', password: 'testpassword' } })];

export const Dark = Template.bind({});
Dark.args = {
    form: data,
};
Dark.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ login: { email: 'testEmail@gmail.com', password: 'testpassword' } })];
