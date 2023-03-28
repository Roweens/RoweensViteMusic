import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignUpCard } from './SignUpCard';

export default {
   title: 'shared/SignUpCard',
   component: SignUpCard,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof SignUpCard>;

const Template: ComponentStory<typeof SignUpCard> = (args) => <SignUpCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
