import type { PlaylistGridProps } from './types'

export function setupPlaylistGrid(props: PlaylistGridProps) {
  const handlePlaylistClick = (playlistId: string) => {
    // Логика перехода к плейлисту
    console.log('Navigate to playlist:', playlistId)
  }

  return {
    handlePlaylistClick
  }
}
