import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddAlbumToFavouriteButton } from './AddAlbumToFavouriteButton';

export default {
    title: 'features/AddAlbumToFavouriteButton',
    component: AddAlbumToFavouriteButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddAlbumToFavouriteButton>;

const Template: ComponentStory<typeof AddAlbumToFavouriteButton> = (args) => <AddAlbumToFavouriteButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
