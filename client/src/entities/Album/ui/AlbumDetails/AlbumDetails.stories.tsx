import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumDetails } from './AlbumDetails';

export default {
   title: 'shared/AlbumDetails',
   component: AlbumDetails,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof AlbumDetails>;

const Template: ComponentStory<typeof AlbumDetails> = (args) => <AlbumDetails { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
