import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistDescriptionModal } from './ArtistDescriptionModal';

export default {
    title: 'entities/Artist/ArtistDescriptionModal',
    component: ArtistDescriptionModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistDescriptionModal>;

const Template: ComponentStory<typeof ArtistDescriptionModal> = (args) => (
    <ArtistDescriptionModal {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
