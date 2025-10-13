import type { Meta, StoryObj } from '@storybook/vue3-vite';

import HeroAvatar from './HeroAvatar.vue';

const meta = {
  title: 'Components/HeroAvatar',
  component: HeroAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    title: 'ArtDanshin',
  },
};
