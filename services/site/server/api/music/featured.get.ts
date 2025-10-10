export default defineEventHandler(async (event) => {
  // Mock data for featured playlists
  const featuredPlaylists = [
    {
      id: '1',
      title: 'Coding Vibes',
      slug: 'coding-vibes',
      description: 'Музыка для продуктивной работы и программирования',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
      tracks: [],
      tracksCount: 25,
      duration: '1:45:30',
      createdAt: '2024-11-01T00:00:00Z',
      updatedAt: '2024-12-01T00:00:00Z',
      featured: true
    },
    {
      id: '2',
      title: 'Gaming Sessions',
      slug: 'gaming-sessions',
      description: 'Энергичная музыка для игровых сессий',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      tracks: [],
      tracksCount: 18,
      duration: '1:12:45',
      createdAt: '2024-10-15T00:00:00Z',
      updatedAt: '2024-11-15T00:00:00Z',
      featured: true
    },
    {
      id: '3',
      title: 'Streaming Mix',
      slug: 'streaming-mix',
      description: 'Разнообразная музыка для стримов',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
      tracks: [],
      tracksCount: 32,
      duration: '2:15:20',
      createdAt: '2024-09-20T00:00:00Z',
      updatedAt: '2024-10-20T00:00:00Z',
      featured: true
    }
  ]

  const limit = getQuery(event).limit ? parseInt(getQuery(event).limit as string) : 3

  return {
    data: featuredPlaylists.slice(0, limit),
    success: true
  }
})
