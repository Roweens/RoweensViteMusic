import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayerPlayButton } from './PlayButton';

export default {
    title: 'widgets/PlayerPlayButton',
    component: PlayerPlayButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlayerPlayButton>;

const Template: ComponentStory<typeof PlayerPlayButton> = (args) => <PlayerPlayButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
