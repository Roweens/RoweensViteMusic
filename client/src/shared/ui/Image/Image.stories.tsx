import { ComponentStory, ComponentMeta } from '@storybook/react';
import testImage from 'shared/assets/testImage.jpg';
import { Image } from './Image';

export default {
    title: 'shared/Image',
    component: Image,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Light = Template.bind({});

Light.args = {
    src: testImage,
};

export const Squared = Template.bind({});
Squared.args = {
    src: testImage,
    squared: true,
};
