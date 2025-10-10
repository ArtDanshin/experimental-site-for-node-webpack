import type { PlaylistCardProps } from './types'

export function usePlaylistCard(props: PlaylistCardProps) {
  const handlePlay = () => {
    // Логика воспроизведения плейлиста
    console.log('Playing playlist:', props.playlist.title)
  }

  return {
    handlePlay
  }
}
