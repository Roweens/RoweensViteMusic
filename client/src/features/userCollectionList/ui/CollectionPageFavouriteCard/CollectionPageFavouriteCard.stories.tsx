import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCollectionFavourite } from './CollectionPageFavouriteCard';

export default {
    title: 'shared/UserCollectionFavourite',
    component: UserCollectionFavourite,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserCollectionFavourite>;

const Template: ComponentStory<typeof UserCollectionFavourite> = (args) => (
    <UserCollectionFavourite {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
