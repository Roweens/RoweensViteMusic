import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line roweens-plugin/upper-layer-imports
import { UserCollectionListCategory } from 'features/userCollectionList';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { TabItem, Tabs } from './Tabs';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const tabItems: TabItem<UserCollectionListCategory>[] = [
    { id: 1, content: <Text text="Альбомы" />, value: 'Albums' },
    { id: 2, content: <Text text="Исполнители" />, value: 'Artists' },
    { id: 3, content: <Text text="Треки" />, value: 'Tracks' },
];

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const NormalHorizontal = Template.bind({});
NormalHorizontal.args = {
    tabs: tabItems,
    value: 'Albums',
    onTabClick: action('onTabClick'),
};

export const DarkHorizontal = Template.bind({});
DarkHorizontal.args = {
    tabs: tabItems,
    value: 'Albums',
    onTabClick: action('onTabClick'),
};

DarkHorizontal.decorators = [ThemeDecorator(Themes.DARK)];

export const NormalVertical = Template.bind({});
NormalVertical.args = {
    tabs: tabItems,
    value: 'Albums',
    onTabClick: action('onTabClick'),
    align: 'vertical',
};

export const DarkVertical = Template.bind({});
DarkVertical.args = {
    tabs: tabItems,
    value: 'Albums',
    onTabClick: action('onTabClick'),
    align: 'vertical',
};

DarkVertical.decorators = [ThemeDecorator(Themes.DARK)];
