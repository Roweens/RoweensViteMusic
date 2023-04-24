import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubscribeToArtistButton } from './SubscribeToArtistButton';

export default {
    title: 'features/subscribeToArtistButton',
    component: SubscribeToArtistButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubscribeToArtistButton>;

const Template: ComponentStory<typeof SubscribeToArtistButton> = (args) => <SubscribeToArtistButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
