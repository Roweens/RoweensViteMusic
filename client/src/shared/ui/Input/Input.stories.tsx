import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Input, InputTheme } from './Input';

export default {
    title: 'shared/Input',
    component: Input,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        placeholder: 'Enter text',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Clean = Template.bind({});
Clean.args = {
    theme: InputTheme.CLEAN,
};

export const Outlined = Template.bind({});
Outlined.args = {
    theme: InputTheme.OUTLINED,
};

export const Filled = Template.bind({});
Filled.args = {
    theme: InputTheme.FILLED,
};

export const CleanDark = Template.bind({});
CleanDark.args = {
    theme: InputTheme.CLEAN,
};
CleanDark.decorators = [ThemeDecorator(Themes.DARK)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    theme: InputTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Themes.DARK)];

export const FilledDark = Template.bind({});
FilledDark.args = {
    theme: InputTheme.FILLED,
};
FilledDark.decorators = [ThemeDecorator(Themes.DARK)];
