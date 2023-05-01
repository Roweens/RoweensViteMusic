import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumCard } from './AlbumCard';

export default {
    title: 'entities/Album/AlbumCard',
    component: AlbumCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumCard>;

const Template: ComponentStory<typeof AlbumCard> = (args) => <AlbumCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
