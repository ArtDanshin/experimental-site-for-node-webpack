import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppHeader from './AppHeader.vue'

describe('AppHeader', () => {
  it('renders correctly', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('.header').exists()).toBe(true)
  })
})
