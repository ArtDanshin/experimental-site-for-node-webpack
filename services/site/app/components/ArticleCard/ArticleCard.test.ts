import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleCard from './ArticleCard.vue'
import type { Article } from '~/types/article'

const mockArticle: Article = {
  id: '1',
  title: 'Test Article',
  slug: 'test-article',
  excerpt: 'Test excerpt',
  content: 'Test content',
  image: 'test-image.jpg',
  category: 'Test',
  tags: ['test', 'article'],
  publishedAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
  author: {
    name: 'Test Author',
    avatar: 'test-avatar.jpg'
  },
  readingTime: 5,
  views: 100
}

describe('ArticleCard', () => {
  it('renders article title', () => {
    const wrapper = mount(ArticleCard, {
      props: { article: mockArticle }
    })
    expect(wrapper.text()).toContain('Test Article')
  })

  it('renders article excerpt', () => {
    const wrapper = mount(ArticleCard, {
      props: { article: mockArticle }
    })
    expect(wrapper.text()).toContain('Test excerpt')
  })

  it('renders article category', () => {
    const wrapper = mount(ArticleCard, {
      props: { article: mockArticle }
    })
    expect(wrapper.text()).toContain('Test')
  })
})
