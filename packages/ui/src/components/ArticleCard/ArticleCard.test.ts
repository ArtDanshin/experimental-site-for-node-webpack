import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ArticleCard from './ArticleCard.vue';

const mockArticle = {
  title: 'Test Article',
  description: 'Test description',
  image: 'test-image.jpg',
  href: '#',
  category: 'Test',
  tags: ['test', 'article'],
  date: '2024-01-01T00:00:00Z',
  readingTime: 5,
};

describe('ArticleCard', () => {
  it('renders article title', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle,
    });
    expect(wrapper.find('.card__title').text()).toContain('Test Article');
  });

  it('renders article excerpt', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle,
    });
    expect(wrapper.find('.card__description').text()).toContain('Test description');
  });

  it('renders article category', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle,
    });
    expect(wrapper.find('.card__category').text()).toContain('Test');
  });
});
