import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCollectionTracksList } from './UserCollectionTracksList';

export default {
    title: 'shared/UserCollectionTracksList',
    component: UserCollectionTracksList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserCollectionTracksList>;

const Template: ComponentStory<typeof UserCollectionTracksList> = (args) => (
    <UserCollectionTracksList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
