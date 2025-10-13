import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Tag from './Tag.vue';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'tech'],
    },
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args };
    },
    template: '<Tag v-bind="args">Default Tag</Tag>',
  }),
};

export const Tech: Story = {
  args: {
    variant: 'tech',
  },
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args };
    },
    template: '<Tag v-bind="args">Default Tag</Tag>',
  }),
};
