import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon from '@/../../public/search.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Switch } from './Switch';

export default {
    title: 'shared/Switch',
    component: Switch,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        href: '#',
    },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    name: 'Switch',
    checked: true,
    options: ['yes', 'no'],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
    name: 'Switch',
    checked: false,
    options: ['yes', 'no'],
};

// export const Dark = Template.bind({});
// Dark.args = {
//     children: 'Dark link',
// };
// Dark.decorators = [ThemeDecorator(Themes.DARK)];
