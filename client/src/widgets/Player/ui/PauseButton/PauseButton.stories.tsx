import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PauseButton } from './PauseButton';

export default {
   title: 'shared/PauseButton',
   component: PauseButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof PauseButton>;

const Template: ComponentStory<typeof PauseButton> = (args) => <PauseButton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
