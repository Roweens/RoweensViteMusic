import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionPageFavouriteCard } from './CollectionPageFavouriteCard';

export default {
   title: 'shared/CollectionPageFavouriteCard',
   component: CollectionPageFavouriteCard,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof CollectionPageFavouriteCard>;

const Template: ComponentStory<typeof CollectionPageFavouriteCard> = (args) => <CollectionPageFavouriteCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
