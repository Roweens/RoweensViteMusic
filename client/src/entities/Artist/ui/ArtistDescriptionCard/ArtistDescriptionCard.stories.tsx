import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistDescriptionCard } from './ArtistDescriptionCard';

export default {
    title: 'entities/Artist/ArtistDescriptionCard',
    component: ArtistDescriptionCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistDescriptionCard>;

const Template: ComponentStory<typeof ArtistDescriptionCard> = (args) => <ArtistDescriptionCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
