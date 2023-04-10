import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayButton } from './PlayButton';

export default {
    title: 'widgets/PlayButton',
    component: PlayButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlayButton>;

const Template: ComponentStory<typeof PlayButton> = (args) => <PlayButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
