import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import type { Project } from '@/types/project'

import ProjectGrid from './ProjectGrid.vue'

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Test Project 1',
    description: 'Test description 1',
    image: 'https://example.com/image1.jpg',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/test1',
    liveUrl: 'https://test1.com',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Test Project 2',
    description: 'Test description 2',
    image: 'https://example.com/image2.jpg',
    technologies: ['Vue', 'JavaScript'],
    githubUrl: 'https://github.com/test2',
    liveUrl: 'https://test2.com',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
]

describe('ProjectGrid', () => {
  it('renders projects correctly', () => {
    const wrapper = mount(ProjectGrid, {
      props: {
        projects: mockProjects
      }
    })

    expect(wrapper.findAll('.project-card')).toHaveLength(2)
    expect(wrapper.text()).toContain('Test Project 1')
    expect(wrapper.text()).toContain('Test Project 2')
  })

  it('renders empty state when no projects', () => {
    const wrapper = mount(ProjectGrid, {
      props: {
        projects: []
      }
    })

    expect(wrapper.findAll('.project-card')).toHaveLength(0)
  })
})
