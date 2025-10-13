import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppFooter from './AppFooter.vue'

describe('AppHeader', () => {
  it('renders correctly', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.find('.footer').exists()).toBe(true)
  })
})
