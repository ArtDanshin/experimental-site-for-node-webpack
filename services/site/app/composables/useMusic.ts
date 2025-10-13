import type { Playlist, PlaylistFilters, PlaylistSearchResult } from '~/types/music';

export const useMusic = () => {
  const { music } = useApi();

  const getPlaylists = async (filters?: PlaylistFilters) => {
    try {
      const response = await music.getPlaylists(filters);
      return response.data as PlaylistSearchResult;
    } catch (error) {
      console.error('Error fetching playlists:', error);
      throw error;
    }
  };

  const getPlaylist = async (id: string) => {
    try {
      const response = await music.getPlaylist(id);
      return response.data as Playlist;
    } catch (error) {
      console.error('Error fetching playlist:', error);
      throw error;
    }
  };

  const getFeaturedPlaylists = async (limit = 3) => {
    try {
      const response = await music.getFeatured(limit);
      return response.data as Playlist[];
    } catch (error) {
      console.error('Error fetching featured playlists:', error);
      throw error;
    }
  };

  return {
    getPlaylists,
    getPlaylist,
    getFeaturedPlaylists,
  };
};
