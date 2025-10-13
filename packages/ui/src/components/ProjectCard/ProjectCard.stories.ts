import type { Meta, StoryObj } from '@storybook/vue3-vite';

import ProjectCard from './ProjectCard.vue';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Персональный сайт',
    description: 'Современный портфолио сайт с адаптивным дизайном и интерактивными элементами.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
    href: '#',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
};

export const Grid: Omit<Story, 'args'> = {
  render: () => ({
    components: { ProjectCard },
    setup() {
      const projects = [
        {
          title: 'Персональный сайт',
          description: 'Современный портфолио сайт с адаптивным дизайном и интерактивными элементами.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
          href: '#',
          tags: ['HTML5', 'CSS3', 'JavaScript'],
        },
        {
          title: 'Game Tracker',
          description: 'Приложение для отслеживания игрового прогресса и достижений.',
          image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=250&fit=crop',
          href: '#',
          tags: ['React', 'Node.js', 'MongoDB'],
        },
        {
          title: 'Stream Overlay',
          description: 'Кастомные оверлеи для стриминга с анимациями и интерактивными элементами.',
          image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
          href: '#',
          tags: ['Vue.js', 'CSS3', 'WebSocket'],
        },
      ];
      return { projects };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"
        />
      </div>
    `,
  }),
};
