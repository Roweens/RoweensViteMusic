import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { Text, TextTheme, TitleTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const App = Template.bind({});
App.args = {
    textTheme: TextTheme.APP,
    titleTheme: TitleTheme.APP,
    title: 'Some title',
    text: 'Test text',
};

export const Primary = Template.bind({});
Primary.args = {
    textTheme: TextTheme.PRIMARY,
    titleTheme: TitleTheme.PRIMARY,
    title: 'Some title',
    text: 'Test text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    textTheme: TextTheme.PRIMARY,
    titleTheme: TitleTheme.PRIMARY,
    title: 'Some title',
    text: 'Test text',
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Inverted = Template.bind({});
Inverted.args = {
    textTheme: TextTheme.INVERTED,
    titleTheme: TitleTheme.INVERTED,
    title: 'Some title',
    text: 'Test text',
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    textTheme: TextTheme.PRIMARY,
    titleTheme: TitleTheme.PRIMARY,
    title: 'Some title',
    text: 'Test text',
};
InvertedDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Error = Template.bind({});
Error.args = {
    textTheme: TextTheme.ERROR,
    titleTheme: TitleTheme.ERROR,
    title: 'Some title',
    text: 'Test text',
};

export const Success = Template.bind({});
Success.args = {
    textTheme: TextTheme.SUCCESS,
    titleTheme: TitleTheme.SUCCESS,
    title: 'Some title',
    text: 'Test text',
};
