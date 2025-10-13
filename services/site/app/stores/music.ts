import { defineStore } from 'pinia'

import type { Playlist, PlaylistFilters } from '@/types/music'

export const useMusicStore = defineStore('music', () => {
  const playlists = ref<Playlist[]>([])
  const currentPlaylist = ref<Playlist | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  const { getPlaylists, getPlaylist, getFeaturedPlaylists } = useMusic()
  
  const fetchPlaylists = async (filters?: PlaylistFilters) => {
    loading.value = true
    error.value = null
    
    try {
      const result = await getPlaylists(filters)
      playlists.value = result.playlists
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch playlists'
    } finally {
      loading.value = false
    }
  }
  
  const fetchPlaylist = async (id: string) => {
    loading.value = true
    error.value = null
    
    try {
      const playlist = await getPlaylist(id)
      currentPlaylist.value = playlist
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch playlist'
    } finally {
      loading.value = false
    }
  }
  
  const fetchFeaturedPlaylists = async (limit = 3) => {
    loading.value = true
    error.value = null
    
    try {
      const featured = await getFeaturedPlaylists(limit)
      playlists.value = featured
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch featured playlists'
    } finally {
      loading.value = false
    }
  }
  
  return {
    playlists: readonly(playlists),
    currentPlaylist: readonly(currentPlaylist),
    loading: readonly(loading),
    error: readonly(error),
    fetchPlaylists,
    fetchPlaylist,
    fetchFeaturedPlaylists
  }
})
