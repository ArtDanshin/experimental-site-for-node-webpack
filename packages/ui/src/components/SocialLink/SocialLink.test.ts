import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import SocialLink from './SocialLink.vue';

describe('SocialLink', () => {
  it('renders correctly', () => {
    const wrapper = mount(SocialLink);
    expect(wrapper.find('.social-link').exists()).toBe(true);
  });
});
