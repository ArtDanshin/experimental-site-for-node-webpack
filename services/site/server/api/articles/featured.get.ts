export default defineEventHandler(async (event) => {
  // Mock data for featured articles
  const featuredArticles = [
    {
      id: '1',
      title: 'Оптимизация производительности React приложений',
      slug: 'react-performance',
      description: 'Разбираем основные техники оптимизации React компонентов и приложений для улучшения производительности.',
      content: 'Полное содержание статьи...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      category: 'Frontend',
      tags: ['React', 'Performance'],
      publishedAt: '2024-12-15T00:00:00Z',
      updatedAt: '2024-12-15T00:00:00Z',
      author: {
        name: 'ArtDanshin',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      readingTime: 8,
      views: 1250
    },
    {
      id: '2',
      title: 'Настройка стриминга для разработчиков',
      slug: 'streaming-setup',
      description: 'Полное руководство по настройке стриминга кода и разработки для начинающих стримеров.',
      content: 'Полное содержание статьи...',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      category: 'Стриминг',
      tags: ['OBS', 'Streaming'],
      publishedAt: '2024-12-08T00:00:00Z',
      updatedAt: '2024-12-08T00:00:00Z',
      author: {
        name: 'ArtDanshin',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      readingTime: 12,
      views: 890
    },
    {
      id: '3',
      title: 'Сборка игрового ПК для разработки',
      slug: 'gaming-rig',
      description: 'Как выбрать компоненты для ПК, который подойдет как для игр, так и для разработки.',
      content: 'Полное содержание статьи...',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=250&fit=crop',
      category: 'Железо',
      tags: ['Hardware', 'Gaming'],
      publishedAt: '2024-12-01T00:00:00Z',
      updatedAt: '2024-12-01T00:00:00Z',
      author: {
        name: 'ArtDanshin',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      readingTime: 15,
      views: 2100
    }
  ]

  const limit = getQuery(event).limit ? parseInt(getQuery(event).limit as string) : 3

  return {
    data: featuredArticles.slice(0, limit),
    success: true
  }
})
