import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumCardSkeleton } from './AlbumCardSkeleton';

export default {
    title: 'entities/Album/AlbumCardSkeleton',
    component: AlbumCardSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AlbumCardSkeleton>;

const Template: ComponentStory<typeof AlbumCardSkeleton> = (args) => (
    <AlbumCardSkeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
