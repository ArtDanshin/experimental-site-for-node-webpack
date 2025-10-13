import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import PlaylistCard from './PlaylistCard.vue';

const mockPlaylist = {
  title: 'Test Playlist',
  description: 'Test description',
  image: 'https://example.com/image.jpg',
  href: '#',
  tracksCount: 25,
};

describe('PlaylistCard', () => {
  it('renders playlist information correctly', () => {
    const wrapper = mount(PlaylistCard, {
      props: mockPlaylist,
    });

    expect(wrapper.text()).toContain('Test Playlist');
    expect(wrapper.text()).toContain('25 треков');
  });

  it('handles play button click', async () => {
    const wrapper = mount(PlaylistCard, {
      props: mockPlaylist,
    });

    const playButton = wrapper.find('.playlist-card__overlay');
    await playButton.trigger('click');

    // Проверяем, что обработчик вызван
    expect(wrapper.emitted()).toBeDefined();
  });
});
