import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumPageTrackControls } from './AlbumPageTrackControls';

export default {
    title: 'pages/AlbumPage/AlbumPageTrackControls',
    component: AlbumPageTrackControls,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumPageTrackControls>;

const Template: ComponentStory<typeof AlbumPageTrackControls> = (args) => <AlbumPageTrackControls {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
