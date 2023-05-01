import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumPage } from './AlbumPage';

export default {
    title: 'pages/AlbumPage/AlbumPage',
    component: AlbumPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumPage>;

const Template: ComponentStory<typeof AlbumPage> = (args) => <AlbumPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
