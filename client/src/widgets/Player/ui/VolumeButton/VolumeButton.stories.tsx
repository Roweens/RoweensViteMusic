import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VolumeButton } from './VolumeButton';

export default {
    title: 'shared/PlayerVolumeButton',
    component: VolumeButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VolumeButton>;

const Template: ComponentStory<typeof VolumeButton> = (args) => (
    <VolumeButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
