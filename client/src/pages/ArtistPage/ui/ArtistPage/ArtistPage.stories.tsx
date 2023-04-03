import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistPage } from './ArtistPage';

export default {
   title: 'shared/ArtistPage',
   component: ArtistPage,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArtistPage>;

const Template: ComponentStory<typeof ArtistPage> = (args) => <ArtistPage { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
