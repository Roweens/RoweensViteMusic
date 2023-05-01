import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { Player } from './Player';

export default {
    title: 'widgets/Player',
    component: Player,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
