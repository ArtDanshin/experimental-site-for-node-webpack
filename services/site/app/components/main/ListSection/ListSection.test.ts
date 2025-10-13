import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ListSection from './ListSection.vue';

describe('HeroSection', () => {
  it('renders title', () => {
    const wrapper = mount(ListSection, {
      props: { title: 'Test Title' },
    });
    expect(wrapper.text()).toContain('Test Title');
  });

  it('renders view all link when showViewAll is true', () => {
    const wrapper = mount(ListSection, {
      props: {
        title: 'Test Title',
        viewAllHref: '/test',
      },
    });
    expect(wrapper.find('.list-section__link').exists()).toBe(true);
  });
});
