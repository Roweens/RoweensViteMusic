import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddToFavouriteButton } from './AddToFavouriteButton';

export default {
    title: 'shared/addToFavouriteButton',
    component: AddToFavouriteButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddToFavouriteButton>;

const Template: ComponentStory<typeof AddToFavouriteButton> = (args) => <AddToFavouriteButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
