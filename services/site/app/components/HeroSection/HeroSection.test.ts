import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from './HeroSection.vue'

describe('HeroSection', () => {
  it('renders default content', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Привет! Я ArtDanshin')
  })

  it('renders custom title', () => {
    const wrapper = mount(HeroSection, {
      props: { title: 'Custom Title' }
    })
    expect(wrapper.text()).toContain('Custom Title')
  })

  it('renders buttons', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('.hero-buttons').exists()).toBe(true)
  })
})
