import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ReactComponent as TestIcon } from 'shared/assets/testIcon.svg';
import { Themes } from 'shared/const/theme';
import { Link } from './Link';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

export default {
    title: 'shared/Link',
    component: Link,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        href: '#',
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Light link',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Dark link',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const WithIcon = Template.bind({});
WithIcon.args = {
    children:
    <>
        <Text text="Icon link" />
        <Icon Svg={TestIcon} />
    </>,

};
