import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistList } from './ArtistList';

export default {
    title: 'entities/Artist/ArtistList',
    component: ArtistList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistList>;

const Template: ComponentStory<typeof ArtistList> = (args) => (
    <ArtistList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
