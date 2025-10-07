import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ArticleCard from './ArticleCard.vue'

const meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Оптимизация производительности React приложений',
    excerpt: 'Разбираем основные техники оптимизации React компонентов и приложений для улучшения производительности. Memo, useMemo, useCallback и другие инструменты.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    href: '#',
    date: '15 декабря 2024',
    readingTime: '8 мин',
    tags: ['React', 'Performance', 'JavaScript'],
  },
}

export const WithoutReadingTime: Story = {
  args: {
    title: 'CSS Grid и Flexbox',
    excerpt: 'Полное руководство по использованию CSS Grid и Flexbox для создания адаптивных и красивых макетов.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    href: '#',
    date: '10 декабря 2024',
    tags: ['CSS', 'Grid', 'Flexbox'],
  },
}

export const BackendArticle: Story = {
  args: {
    title: 'Создание REST API с Node.js и Express',
    excerpt: 'Пошаговое руководство по созданию RESTful API с использованием Node.js, Express и MongoDB.',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-node-api.jpg',
    href: '#',
    date: '28 ноября 2024',
    readingTime: '12 мин',
    tags: ['Node.js', 'Express', 'API'],
  },
}

export const StreamingArticle: Story = {
  args: {
    title: 'Настройка стриминга для разработчиков',
    excerpt: 'Полное руководство по настройке стриминга кода и разработки для начинающих стримеров.',
    category: 'Стриминг',
    image: 'https://images.unsplash.com/photo-streaming-setup.jpg',
    href: '#',
    date: '8 декабря 2024',
    readingTime: '15 мин',
    tags: ['OBS', 'Streaming', 'Setup'],
  },
}

export const Grid: Omit<Story, 'args'> = {
  render: () => ({
    components: { ArticleCard },
    setup() {
      const articles = [
        {
          title: 'Оптимизация производительности React приложений',
          excerpt: 'Разбираем основные техники оптимизации React компонентов.',
          category: 'Frontend',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
          href: '#',
          date: '15 декабря 2024',
          tags: ['React', 'Performance'],
        },
        {
          title: 'CSS Grid и Flexbox',
          excerpt: 'Полное руководство по использованию современных CSS техник.',
          category: 'Frontend',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          href: '#',
          date: '10 декабря 2024',
          tags: ['CSS', 'Grid'],
        },
        {
          title: 'TypeScript для начинающих',
          excerpt: 'Введение в TypeScript: основные типы и лучшие практики.',
          category: 'Frontend',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
          href: '#',
          date: '5 декабря 2024',
          tags: ['TypeScript', 'JavaScript'],
        },
      ]
      return { articles }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
        <ArticleCard
          v-for="(article, index) in articles"
          :key="index"
          v-bind="article"
        />
      </div>
    `,
  }),
}

