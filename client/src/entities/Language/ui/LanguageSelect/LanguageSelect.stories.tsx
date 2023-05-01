import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageSelect } from './LanguageSelect';

export default {
    title: 'entities/Language/LanguageSelect',
    component: LanguageSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LanguageSelect>;

const Template: ComponentStory<typeof LanguageSelect> = (args) => <LanguageSelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
