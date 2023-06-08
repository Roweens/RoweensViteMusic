import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Themes } from 'shared/const/theme';
import { LoginPage } from './LoginPage';

export default {
    title: 'pages/LoginPage',
    component: LoginPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        login: { email: 'testEmail@gmail.com', password: 'testpassword' },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Themes.DARK),
    StoreDecorator({
        login: { email: 'testEmail@gmail.com', password: 'testpassword' },
    }),
];
