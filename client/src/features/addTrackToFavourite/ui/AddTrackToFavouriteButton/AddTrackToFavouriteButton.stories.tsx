import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddTrackToFavouriteButton } from './AddTrackToFavouriteButton';

export default {
    title: 'features/addTrackToFavouriteButton',
    component: AddTrackToFavouriteButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddTrackToFavouriteButton>;

const Template: ComponentStory<typeof AddTrackToFavouriteButton> = (args) => <AddTrackToFavouriteButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
