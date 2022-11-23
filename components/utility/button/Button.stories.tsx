import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'templates/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonProps.primary,
} as IButton;

export const Danger = Template.bind({});
Danger.args = {
  ...mockButtonProps.danger,
} as IButton;

export const Warning = Template.bind({});
Warning.args = {
  ...mockButtonProps.warning,
} as IButton;

export const Success = Template.bind({});
Success.args = {
  ...mockButtonProps.success,
} as IButton;

export const Blue = Template.bind({});
Blue.args = {
  ...mockButtonProps.blue,
} as IButton;
