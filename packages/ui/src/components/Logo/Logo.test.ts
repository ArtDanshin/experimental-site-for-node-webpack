import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Logo from './Logo.vue';

describe('Logo', () => {
  it('renders correctly', () => {
    const wrapper = mount(Logo);
    expect(wrapper.find('.logo').exists()).toBe(true);
  });
});
