import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumList } from './AlbumList';

export default {
    title: 'entities/Album/AlbumList',
    component: AlbumList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumList>;

const Template: ComponentStory<typeof AlbumList> = (args) => <AlbumList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
