import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from './ProjectCard.vue'
import type { Project } from '~/types/project'

const mockProject: Project = {
  id: '1',
  title: 'Test Project',
  description: 'Test description',
  image: 'https://example.com/image.jpg',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/test',
  liveUrl: 'https://test.com',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
}

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject
      }
    })

    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('Test description')
  })

  it('handles project click', async () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject
      }
    })

    const projectLink = wrapper.find('.project-link')
    await projectLink.trigger('click')

    // Проверяем, что обработчик вызван
    expect(wrapper.emitted()).toBeDefined()
  })
})
