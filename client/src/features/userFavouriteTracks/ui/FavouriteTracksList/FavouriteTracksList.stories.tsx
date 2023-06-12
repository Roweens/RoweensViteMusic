import { ComponentStory, ComponentMeta } from '@storybook/react';
import FavouriteTracksList from './FavouriteTracksList';

export default {
    title: 'shared/FavouriteTracksList',
    component: FavouriteTracksList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FavouriteTracksList>;

const Template: ComponentStory<typeof FavouriteTracksList> = (args) => (
    <FavouriteTracksList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
