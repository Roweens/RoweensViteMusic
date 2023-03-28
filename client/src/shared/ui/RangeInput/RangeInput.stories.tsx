import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RangeInput } from './RangeInput';

export default {
   title: 'shared/RangeInput',
   component: RangeInput,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args) => <RangeInput { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
