import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tag from './Tag.vue'

describe('Tag', () => {
  it('renders with label', () => {
    const wrapper = mount(Tag, {
      props: { label: 'Test Tag' }
    })
    expect(wrapper.text()).toBe('Test Tag')
  })

  it('applies variant classes', () => {
    const wrapper = mount(Tag, {
      props: { label: 'Test', variant: 'success' }
    })
    expect(wrapper.classes()).toContain('tag--success')
  })

  it('applies size classes', () => {
    const wrapper = mount(Tag, {
      props: { label: 'Test', size: 'lg' }
    })
    expect(wrapper.classes()).toContain('tag--lg')
  })
})
