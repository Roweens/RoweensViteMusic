import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Themes } from 'shared/const/theme';
import { LoginCard } from './LoginCard';

export default {
    title: 'features/authByEmail/LoginCard',
    component: LoginCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginCard>;

const Template: ComponentStory<typeof LoginCard> = (args) => <LoginCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [StoreDecorator({ login: { email: 'testEmail@gmail.com', password: 'testpassword' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ login: { email: 'testEmail@gmail.com', password: 'testpassword' } })];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ login: { email: 'testEmail@gmail.com', password: 'testpassword', error: 'true' } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ login: { email: 'testEmail@gmail.com', password: 'testpassword', isLoading: true } })];
