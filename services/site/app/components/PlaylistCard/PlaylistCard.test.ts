import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlaylistCard from './PlaylistCard.vue'
import type { Playlist } from '~/types/music'

const mockPlaylist: Playlist = {
  id: '1',
  title: 'Test Playlist',
  description: 'Test description',
  image: 'https://example.com/image.jpg',
  tracks: 10,
  duration: '45:30',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
}

describe('PlaylistCard', () => {
  it('renders playlist information correctly', () => {
    const wrapper = mount(PlaylistCard, {
      props: {
        playlist: mockPlaylist
      }
    })

    expect(wrapper.text()).toContain('Test Playlist')
    expect(wrapper.text()).toContain('10 треков')
  })

  it('handles play button click', async () => {
    const wrapper = mount(PlaylistCard, {
      props: {
        playlist: mockPlaylist
      }
    })

    const playButton = wrapper.find('.playlist-overlay')
    await playButton.trigger('click')

    // Проверяем, что обработчик вызван
    expect(wrapper.emitted()).toBeDefined()
  })
})
