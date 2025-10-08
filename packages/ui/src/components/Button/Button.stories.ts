import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'text', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Outlined Button</Button>',
  }),
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Text Button</Button>',
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Full Width Button</Button>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
    `,
  }),
};
