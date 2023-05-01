import { ComponentStory, ComponentMeta } from '@storybook/react';
import testImage from 'shared/assets/testImage.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { Card } from './Card';
import { Image } from '../Image/Image';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    children:
    <>
        <Image src={testImage} />
        <Text text="Some interesting text" />
    </>,
};

export const Dark = Template.bind({});
Dark.args = {
    children:
    <>
        <Image src={testImage} />
        <Text text="Some interesting text" />
    </>,
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
