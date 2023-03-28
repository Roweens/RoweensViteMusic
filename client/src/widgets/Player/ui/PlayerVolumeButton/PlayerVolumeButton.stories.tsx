import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayerVolumeButton } from './PlayerVolumeButton';

export default {
   title: 'shared/PlayerVolumeButton',
   component: PlayerVolumeButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof PlayerVolumeButton>;

const Template: ComponentStory<typeof PlayerVolumeButton> = (args) => <PlayerVolumeButton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
