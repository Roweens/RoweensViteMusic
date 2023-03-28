import { ComponentStory, ComponentMeta } from '@storybook/react';
import testImage from 'shared/assets/testImage.jpg';
import { Card, CardSize } from './Card';

export default {
    title: 'shared/Card',
    component: Card,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light_M = Template.bind({});

Light_M.args = {
    image: testImage,
    title: 'Test card',
    text: 'Some interesting text',
    size: CardSize.M,
};

export const Dark_M = Template.bind({});
Dark_M.args = {
    image: testImage,
    title: 'Test card',
    text: 'Some interesting text',
    size: CardSize.M,
};

export const Light_L = Template.bind({});

Light_L.args = {
    image: testImage,
    title: 'Test card',
    text: 'Some interesting text',
    size: CardSize.L,
};

export const Dark_L = Template.bind({});
Dark_L.args = {
    image: testImage,
    title: 'Test card',
    text: 'Some interesting text',
    size: CardSize.L,
};
