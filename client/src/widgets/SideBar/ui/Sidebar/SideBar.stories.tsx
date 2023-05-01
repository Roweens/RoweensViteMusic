import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { SideBar } from './SideBar';

export default {
    title: 'widgets/SideBar',
    component: SideBar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {

};
Light.parameters = {
    nextRouter: {
        path: '/',
        asPath: '/',
        locale: 'ru',
    },
};

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
Dark.parameters = {
    nextRouter: {
        path: '/',
        asPath: '/',
        locale: 'ru',
    },
};
