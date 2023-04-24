import { ComponentStory, ComponentMeta } from '@storybook/react';
import CollectionPage from './CollectionPage';

export default {
    title: 'shared/CollectionPage',
    component: CollectionPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CollectionPage>;

const Template: ComponentStory<typeof CollectionPage> = (args) => <CollectionPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
