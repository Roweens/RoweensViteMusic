import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCollectionArtistList } from './UserCollectionArtistList';

export default {
   title: 'shared/UserCollectionArtistList',
   component: UserCollectionArtistList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof UserCollectionArtistList>;

const Template: ComponentStory<typeof UserCollectionArtistList> = (args) => <UserCollectionArtistList { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
