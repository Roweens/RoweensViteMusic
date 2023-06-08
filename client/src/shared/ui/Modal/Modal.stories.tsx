import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'shared/const/theme';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isVisible: true,
    children:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi unde quod blanditiis tempore perspiciatis dicta vel cum, recusandae corporis doloribus architecto corrupti eum sequi veniam impedit tenetur quos necessitatibus id',
};

export const Dark = Template.bind({});
Dark.args = {
    isVisible: true,
    children:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi unde quod blanditiis tempore perspiciatis dicta vel cum, recusandae corporis doloribus architecto corrupti eum sequi veniam impedit tenetur quos necessitatibus id',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
