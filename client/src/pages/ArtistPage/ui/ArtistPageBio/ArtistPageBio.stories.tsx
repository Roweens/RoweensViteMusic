import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistPageBio } from './ArtistPageBio';

export default {
    title: 'pages/ArtistPage/ArtistPageBio',
    component: ArtistPageBio,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtistPageBio>;

const Template: ComponentStory<typeof ArtistPageBio> = (args) => (
    <ArtistPageBio {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
