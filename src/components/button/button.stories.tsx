import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const META = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} satisfies Meta;

export default META;

type Story = StoryObj<typeof Button>;

export const PRIMARY: Story = {};

export const SECONDARY: Story = {};
