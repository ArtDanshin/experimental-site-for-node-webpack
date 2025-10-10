import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatsSection from './StatsSection.vue'
import type { Stats } from '~/types/common'

const mockStats: Stats = {
  projects: 50,
  articles: 25,
  streams: 1000,
  playlists: 15
}

describe('StatsSection', () => {
  it('renders stats correctly', () => {
    const wrapper = mount(StatsSection, {
      props: { stats: mockStats }
    })
    expect(wrapper.text()).toContain('50')
    expect(wrapper.text()).toContain('Проектов')
  })

  it('renders all stat items', () => {
    const wrapper = mount(StatsSection, {
      props: { stats: mockStats }
    })
    expect(wrapper.findAll('.stat-item')).toHaveLength(4)
  })
})
