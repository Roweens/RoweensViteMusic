import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { DropDown, ThemeDropDown } from './DropDown';

export default {
    title: 'shared/DropDown',
    component: DropDown,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

const valuesArray = [
    {
        id: 0,
        label: 'Option 1',
        value: 'value 1',
    },
    {
        id: 1,
        label: 'Option 2',
        value: 'value 2',
    },
    {
        id: 2,
        label: 'Option 3',
        value: 'value 3',
    },
];

export const CLEAR = Template.bind({});
CLEAR.args = {
    state: 'Dropdown',
    theme: ThemeDropDown.CLEAR,
    options: valuesArray,
};

export const OUTLINED = Template.bind({});
OUTLINED.args = {
    state: 'Dropdown',
    theme: ThemeDropDown.OUTLINED,
    options: valuesArray,
};

export const FILLED = Template.bind({});
FILLED.args = {
    state: 'Dropdown',
    theme: ThemeDropDown.FILLED,
    options: valuesArray,
};

export const CLEAR_DARK = Template.bind({});
CLEAR_DARK.args = {
    state: 'Dropdown',
    theme: ThemeDropDown.CLEAR,
    options: valuesArray,
};
CLEAR_DARK.decorators = [ThemeDecorator(Themes.DARK)];

export const OUTLINED_DARK = Template.bind({});
OUTLINED_DARK.args = {
    state: 'Dropdown',
    theme: ThemeDropDown.OUTLINED,
    options: valuesArray,
};
OUTLINED_DARK.decorators = [ThemeDecorator(Themes.DARK)];

export const FILLED_DARK = Template.bind({});
FILLED_DARK.args = {
    state: 'Dropdown',
    theme: ThemeDropDown.FILLED,
    options: valuesArray,
};
FILLED_DARK.decorators = [ThemeDecorator(Themes.DARK)];
