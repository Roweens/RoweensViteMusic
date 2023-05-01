import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistItem } from './ArtistItem';

export default {
    title: 'entities/Artist/ArtistItem',
    component: ArtistItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistItem>;

const Template: ComponentStory<typeof ArtistItem> = (args) => <ArtistItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
