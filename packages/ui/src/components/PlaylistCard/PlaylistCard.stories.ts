import type { Meta, StoryObj } from '@storybook/vue3-vite';

import PlaylistCard from './PlaylistCard.vue';

const meta = {
  title: 'Components/PlaylistCard',
  component: PlaylistCard,
  tags: ['autodocs'],
} satisfies Meta<typeof PlaylistCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Coding Vibes',
    description: 'Современный портфолио сайт с адаптивным дизайном и интерактивными элементами.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
    href: '#',
    tracksCount: 25,
  },
};

export const Grid: Omit<Story, 'args'> = {
  render: () => ({
    components: { PlaylistCard },
    setup() {
      const projects = [
        {
          title: 'Coding Vibes',
          description: 'Современный портфолио сайт с адаптивным дизайном и интерактивными элементами.',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
          href: '#',
          tracksCount: 25,
        },
        {
          title: 'Gaming Sessions',
          description: 'Приложение для отслеживания игрового прогресса и достижений.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
          href: '#',
          tracksCount: 18,
        },
        {
          title: 'Streaming Mix',
          description: 'Кастомные оверлеи для стриминга с анимациями и интерактивными элементами.',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
          href: '#',
          tracksCount: 32,
        },
      ];
      return { projects };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
        <PlaylistCard
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"
        />
      </div>
    `,
  }),
};
