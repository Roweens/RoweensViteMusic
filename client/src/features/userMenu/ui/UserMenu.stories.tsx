import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserMenu } from './UserMenu';

export default {
    title: 'features/UserMenu',
    component: UserMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => <UserMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
