import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ReactComponent as TestIcon } from 'shared/assets/testIcon.svg';
import { Button, ButtonTheme, ButtonSize } from './Button';

export default {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Test button',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clean = Template.bind({});
Clean.args = {
    theme: ButtonTheme.CLEAN,
};

export const Outlined = Template.bind({});
Outlined.args = {
    theme: ButtonTheme.OUTLINED,
};

export const Filled = Template.bind({});
Filled.args = {
    theme: ButtonTheme.FILLED,
};

export const Shadow = Template.bind({});
Shadow.args = {
    theme: ButtonTheme.SHADOW,
};

export const CleanDark = Template.bind({});
CleanDark.args = {
    theme: ButtonTheme.CLEAN,
};

CleanDark.decorators = [ThemeDecorator(Themes.DARK)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Themes.DARK)];

export const FilledDark = Template.bind({});
FilledDark.args = {
    theme: ButtonTheme.FILLED,
};
FilledDark.decorators = [ThemeDecorator(Themes.DARK)];

export const ShadowDark = Template.bind({});
ShadowDark.args = {
    theme: ButtonTheme.SHADOW,
};
ShadowDark.decorators = [ThemeDecorator(Themes.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    theme: ButtonTheme.CLEAN,
    size: ButtonSize.MEDIUM,
    squared: true,
    children: <TestIcon />,
};

export const SquareL = Template.bind({});
SquareL.args = {
    theme: ButtonTheme.CLEAN,
    size: ButtonSize.LARGE,
    squared: true,
    children: <TestIcon />,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    theme: ButtonTheme.CLEAN,
    size: ButtonSize.EXTRA_LARGE,
    squared: true,
    children: <TestIcon />,
};
