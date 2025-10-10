import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppNav from './AppNav.vue'

describe('AppNav', () => {
  it('shows navigation items', () => {
    const wrapper = mount(AppNav)
    expect(wrapper.find('.nav__list').exists()).toBe(true)
  })

  it('toggles mobile menu', async () => {
    const wrapper = mount(AppNav)
    const toggle = wrapper.find('.nav__mobile-toggle')
    await toggle.trigger('click')
    expect(wrapper.find('.nav_body._open').exists()).toBe(true)
  })
})
