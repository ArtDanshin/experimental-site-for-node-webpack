import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import type { Article } from '@/types/article'

import ArticleGrid from './ArticleGrid.vue'

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Test Article 1',
    slug: 'test-article-1',
    description: 'Test excerpt 1',
    content: 'Test content 1',
    image: 'test-image-1.jpg',
    category: 'Test',
    tags: ['test'],
    publishedAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    author: {
      name: 'Test Author',
      avatar: 'test-avatar.jpg'
    },
    readingTime: 5,
    views: 100
  },
  {
    id: '2',
    title: 'Test Article 2',
    slug: 'test-article-2',
    description: 'Test excerpt 2',
    content: 'Test content 2',
    image: 'test-image-2.jpg',
    category: 'Test',
    tags: ['test'],
    publishedAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
    author: {
      name: 'Test Author',
      avatar: 'test-avatar.jpg'
    },
    readingTime: 5,
    views: 100
  }
]

describe('ArticleGrid', () => {
  it('renders articles', () => {
    const wrapper = mount(ArticleGrid, {
      props: { articles: mockArticles }
    })
    expect(wrapper.findAll('.article-card')).toHaveLength(2)
  })

  it('limits articles when limit prop is provided', () => {
    const wrapper = mount(ArticleGrid, {
      props: { articles: mockArticles, limit: 1 }
    })
    expect(wrapper.findAll('.article-card')).toHaveLength(1)
  })
})
