import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistDescriptionModal } from './ArtistDescriptionModal';

export default {
   title: 'shared/ArtistDescriptionModal',
   component: ArtistDescriptionModal,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArtistDescriptionModal>;

const Template: ComponentStory<typeof ArtistDescriptionModal> = (args) => <ArtistDescriptionModal { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
