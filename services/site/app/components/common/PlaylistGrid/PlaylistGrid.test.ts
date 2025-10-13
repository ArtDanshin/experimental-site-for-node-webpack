import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import type { Playlist } from '@/types/music';

import PlaylistGrid from './PlaylistGrid.vue';

const mockPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Test Playlist 1',
    description: 'Test description 1',
    image: 'https://example.com/image1.jpg',
    tracks: 10,
    duration: '45:30',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Test Playlist 2',
    description: 'Test description 2',
    image: 'https://example.com/image2.jpg',
    tracks: 15,
    duration: '60:45',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
];

describe('PlaylistGrid', () => {
  it('renders playlists correctly', () => {
    const wrapper = mount(PlaylistGrid, {
      props: {
        playlists: mockPlaylists,
      },
    });

    expect(wrapper.findAll('.playlist-card')).toHaveLength(2);
    expect(wrapper.text()).toContain('Test Playlist 1');
    expect(wrapper.text()).toContain('Test Playlist 2');
  });

  it('renders empty state when no playlists', () => {
    const wrapper = mount(PlaylistGrid, {
      props: {
        playlists: [],
      },
    });

    expect(wrapper.findAll('.playlist-card')).toHaveLength(0);
  });
});
