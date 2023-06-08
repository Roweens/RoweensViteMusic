import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPageAlbumsByGenre } from './MainPageAlbumsByGenre';

export default {
    title: 'pages/MainPage/MainPageAlbumsByGenre',
    component: MainPageAlbumsByGenre,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPageAlbumsByGenre>;

const Template: ComponentStory<typeof MainPageAlbumsByGenre> = (args) => (
    <MainPageAlbumsByGenre {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
