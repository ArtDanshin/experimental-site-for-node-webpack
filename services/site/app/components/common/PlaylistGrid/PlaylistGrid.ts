const handlePlaylistClick = (playlistId: string) => {
  // Логика перехода к плейлисту
  console.log('Navigate to playlist:', playlistId);
};

export function setupPlaylistGrid() {
  return {
    handlePlaylistClick,
  };
}
