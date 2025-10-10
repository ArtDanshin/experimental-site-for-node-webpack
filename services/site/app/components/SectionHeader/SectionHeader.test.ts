import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionHeader from './SectionHeader.vue'

describe('SectionHeader', () => {
  it('renders title', () => {
    const wrapper = mount(SectionHeader, {
      props: { title: 'Test Title' }
    })
    expect(wrapper.text()).toContain('Test Title')
  })

  it('renders subtitle', () => {
    const wrapper = mount(SectionHeader, {
      props: { 
        title: 'Test Title',
        subtitle: 'Test Subtitle'
      }
    })
    expect(wrapper.text()).toContain('Test Subtitle')
  })

  it('renders view all link when showViewAll is true', () => {
    const wrapper = mount(SectionHeader, {
      props: { 
        title: 'Test Title',
        showViewAll: true,
        viewAllHref: '/test'
      }
    })
    expect(wrapper.find('.view-all-link').exists()).toBe(true)
  })
})
