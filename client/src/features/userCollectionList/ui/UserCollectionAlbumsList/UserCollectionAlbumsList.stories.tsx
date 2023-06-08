import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCollectionAlbumsList } from './UserCollectionAlbumsList';

export default {
    title: 'shared/UserCollectionAlbumsList',
    component: UserCollectionAlbumsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserCollectionAlbumsList>;

const Template: ComponentStory<typeof UserCollectionAlbumsList> = (args) => (
    <UserCollectionAlbumsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
