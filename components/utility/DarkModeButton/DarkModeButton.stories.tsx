import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DarkModeButto, { IDarkModeButton } from './DarkModeButton';
import { mockDarkModeButtonProps } from './DarkModeButton.mocks';

export default {
  title: 'templates/Button',
  component: DarkModeButto,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onClick: { action: action('clickedddd') } },
} as ComponentMeta<typeof DarkModeButto>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DarkModeButto> = (args) => (
  <DarkModeButto {...args} />
);

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});

Dark.args = {
  ...mockDarkModeButtonProps.base,
  status: 'dark',
} as IDarkModeButton;

Light.args = {
  ...mockDarkModeButtonProps.base,
  status: 'light',
} as IDarkModeButton;
