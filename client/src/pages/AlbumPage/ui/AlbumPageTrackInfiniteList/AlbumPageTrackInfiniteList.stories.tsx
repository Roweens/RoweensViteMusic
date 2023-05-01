import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumPageTrackInfiniteList } from './AlbumPageTrackInfiniteList';

export default {
    title: 'pages/AlbumPage/AlbumPageTrackInfiniteList',
    component: AlbumPageTrackInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumPageTrackInfiniteList>;

const Template: ComponentStory<typeof AlbumPageTrackInfiniteList> = (args) => <AlbumPageTrackInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
