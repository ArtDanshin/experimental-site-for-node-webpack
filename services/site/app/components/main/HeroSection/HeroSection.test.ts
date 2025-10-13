import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import HeroSection from './HeroSection.vue';

describe('main/HeroSection', () => {
  it('renders default content', () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.text()).toContain('Привет! Я ArtDanshin');
  });

  it('renders buttons', () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.find('.hero-section__actions').exists()).toBe(true);
  });
});
