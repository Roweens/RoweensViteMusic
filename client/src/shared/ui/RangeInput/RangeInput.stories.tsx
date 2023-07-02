import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { RangeInput } from './RangeInput';

export default {
    title: 'shared/RangeInput',
    component: RangeInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args) => (
    <RangeInput {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    left: 0,
    right: 100,
    leftLabel: '0',
    rightLabel: '100',
    step: 0.1,
    width: 200,
};

export const Dark = Template.bind({});
Dark.args = {
    left: 0,
    right: 100,
    leftLabel: '0',
    rightLabel: '100',
    step: 0.1,
    width: 200,
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
