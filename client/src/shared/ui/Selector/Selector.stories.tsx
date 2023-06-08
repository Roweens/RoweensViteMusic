import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { Selector, SelectorTheme } from './Selector';

export default {
    title: 'shared/Selector',
    component: Selector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => (
    <Selector {...args} />
);

export const NormalClean = Template.bind({});
NormalClean.args = {
    options: [
        {
            id: 1,
            label: 'Label 1',
            value: 'Value 1',
            disabled: true,
        },
        { id: 2, label: 'Label 2', value: 'Value 2' },
        { id: 3, label: 'Label 3', value: 'Value 3' },
    ],
    label: 'Выберите значение',
    theme: SelectorTheme.CLEAR,
};

export const DarkClean = Template.bind({});
DarkClean.args = {
    label: 'Выберите значение',
    options: [
        { id: 1, label: 'Label 1', value: 'Value 1' },
        { id: 2, label: 'Label 2', value: 'Value 2' },
        { id: 3, label: 'Label 3', value: 'Value 3' },
    ],
    theme: SelectorTheme.CLEAR,
};

DarkClean.decorators = [ThemeDecorator(Themes.DARK)];

export const NormalOutlined = Template.bind({});
NormalOutlined.args = {
    options: [
        {
            id: 1,
            label: 'Label 1',
            value: 'Value 1',
            disabled: true,
        },
        { id: 2, label: 'Label 2', value: 'Value 2' },
        { id: 3, label: 'Label 3', value: 'Value 3' },
    ],
    label: 'Выберите значение',
    theme: SelectorTheme.OUTLINED,
};

export const DarkOutlined = Template.bind({});
DarkOutlined.args = {
    label: 'Выберите значение',
    options: [
        { id: 1, label: 'Label 1', value: 'Value 1' },
        { id: 2, label: 'Label 2', value: 'Value 2' },
        { id: 3, label: 'Label 3', value: 'Value 3' },
    ],
    theme: SelectorTheme.OUTLINED,
};

DarkOutlined.decorators = [ThemeDecorator(Themes.DARK)];

export const NormalFilled = Template.bind({});
NormalFilled.args = {
    options: [
        {
            id: 1,
            label: 'Label 1',
            value: 'Value 1',
            disabled: true,
        },
        { id: 2, label: 'Label 2', value: 'Value 2' },
        { id: 3, label: 'Label 3', value: 'Value 3' },
    ],
    label: 'Выберите значение',
    theme: SelectorTheme.FILLED,
};

export const DarkFilled = Template.bind({});
DarkFilled.args = {
    label: 'Выберите значение',
    options: [
        { id: 1, label: 'Label 1', value: 'Value 1' },
        { id: 2, label: 'Label 2', value: 'Value 2' },
        { id: 3, label: 'Label 3', value: 'Value 3' },
    ],
    theme: SelectorTheme.FILLED,
};

DarkFilled.decorators = [ThemeDecorator(Themes.DARK)];
