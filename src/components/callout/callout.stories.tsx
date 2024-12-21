import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sed obcaecati cupiditate, non cum necessitatibus excepturi illum delectus dolores dolorum quasi perspiciatis doloremque! Natus, laudantium? Nostrum natus exercitationem perspiciatis aspernatur?',
  },
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};