import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FavouriteTracksModal } from './FavouriteTracksModal';

export default {
    title: 'shared/FavouriteTracksModal',
    component: FavouriteTracksModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FavouriteTracksModal>;

const Template: ComponentStory<typeof FavouriteTracksModal> = (args) => (
    <FavouriteTracksModal {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
