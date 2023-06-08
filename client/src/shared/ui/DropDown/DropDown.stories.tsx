import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { ReactComponent as IconTest } from './assets/down.svg';
import { DropDown, DropdownItem, ThemeDropDown } from './DropDown';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export default {
    title: 'shared/DropDown',
    component: DropDown,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
    <DropDown {...args} />
);

const valuesArray: DropdownItem[] = [
    {
        id: 1,
        content: 'Button item',
        disabled: false,
    },
    {
        id: 2,
        content: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Icon Svg={IconTest} width={25} height={25} />
                Button item
            </div>
        ),
        disabled: true,
    },
    {
        id: 3,
        content: 'Link item',
        disabled: false,
        href: '#',
    },
];
export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeDropDown.CLEAR,
    options: valuesArray,
    trigger: <Button>Clear menu</Button>,
};

export const Outlined = Template.bind({});
Outlined.args = {
    theme: ThemeDropDown.OUTLINED,
    options: valuesArray,
    trigger: <Button>Outlined menu</Button>,
};

export const Filled = Template.bind({});
Filled.args = {
    theme: ThemeDropDown.FILLED,
    options: valuesArray,
    trigger: <Button>Filled menu</Button>,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ThemeDropDown.CLEAR,
    options: valuesArray,
    trigger: <Button>Clear menu</Button>,
};
ClearDark.decorators = [ThemeDecorator(Themes.DARK)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    theme: ThemeDropDown.OUTLINED,
    options: valuesArray,
    trigger: <Button>Outlined menu</Button>,
};
OutlinedDark.decorators = [ThemeDecorator(Themes.DARK)];

export const FilledDark = Template.bind({});
FilledDark.args = {
    theme: ThemeDropDown.FILLED,
    options: valuesArray,
    trigger: <Button>Filled menu</Button>,
};
FilledDark.decorators = [ThemeDecorator(Themes.DARK)];
