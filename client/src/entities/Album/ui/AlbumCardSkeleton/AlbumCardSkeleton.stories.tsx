import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { AlbumCardSkeleton } from './AlbumCardSkeleton';

export default {
    title: 'entities/Album/AlbumCardSkeleton',
    component: AlbumCardSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumCardSkeleton>;

const Template: ComponentStory<typeof AlbumCardSkeleton> = (args) => (
    <AlbumCardSkeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
