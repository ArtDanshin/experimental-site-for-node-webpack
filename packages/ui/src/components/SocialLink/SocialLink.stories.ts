import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SocailLink from './SocialLink.vue';

const meta = {
  title: 'Components/SocialLink',
  component: SocailLink,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['gh', 'th', 'yb', 'tg', 'vk'],
    },
    href: {
      control: 'text',
    },
  },
  args: {
    type: 'gh',
    href: '#',
  },
} satisfies Meta<typeof SocailLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
