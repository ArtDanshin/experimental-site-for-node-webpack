export default defineEventHandler(async (event) => {
  // Mock data for featured projects
  const featuredProjects = [
    {
      id: '1',
      title: 'Персональный сайт',
      slug: 'portfolio',
      description: 'Современный портфолио сайт с адаптивным дизайном и интерактивными элементами.',
      content: 'Полное описание проекта...',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      links: {
        github: 'https://github.com/artdanshin/portfolio',
        demo: 'https://artdanshin.ru'
      },
      status: 'completed',
      featured: true,
      createdAt: '2024-11-01T00:00:00Z',
      updatedAt: '2024-12-01T00:00:00Z',
      screenshots: []
    },
    {
      id: '2',
      title: 'Game Tracker',
      slug: 'game-tracker',
      description: 'Приложение для отслеживания игрового прогресса и достижений.',
      content: 'Полное описание проекта...',
      image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/artdanshin/game-tracker',
        demo: 'https://game-tracker.artdanshin.ru'
      },
      status: 'completed',
      featured: true,
      createdAt: '2024-10-15T00:00:00Z',
      updatedAt: '2024-11-15T00:00:00Z',
      screenshots: []
    },
    {
      id: '3',
      title: 'Stream Overlay',
      slug: 'stream-overlay',
      description: 'Кастомные оверлеи для стриминга с анимациями и интерактивными элементами.',
      content: 'Полное описание проекта...',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
      technologies: ['Vue.js', 'CSS3', 'WebSocket'],
      links: {
        github: 'https://github.com/artdanshin/stream-overlay',
        demo: 'https://overlay.artdanshin.ru'
      },
      status: 'completed',
      featured: true,
      createdAt: '2024-09-20T00:00:00Z',
      updatedAt: '2024-10-20T00:00:00Z',
      screenshots: []
    }
  ]

  const limit = getQuery(event).limit ? parseInt(getQuery(event).limit as string) : 3

  return {
    data: featuredProjects.slice(0, limit),
    success: true
  }
})
