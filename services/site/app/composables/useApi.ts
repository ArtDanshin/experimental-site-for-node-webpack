import type { ApiResponse, PaginationParams, SearchParams } from '~/types/api'

export const useApi = () => {
  const { $fetch } = useNuxtApp()
  
  return {
    articles: {
      getAll: (params?: PaginationParams) => 
        $fetch<ApiResponse<any>>('/api/articles', { query: params }),
      getById: (id: string) => 
        $fetch<ApiResponse<any>>(`/api/articles/${id}`),
      search: (params: SearchParams) => 
        $fetch<ApiResponse<any>>('/api/articles/search', { query: params }),
      getFeatured: (limit = 3) => 
        $fetch<ApiResponse<any>>('/api/articles/featured', { query: { limit } })
    },
    projects: {
      getAll: (params?: PaginationParams) => 
        $fetch<ApiResponse<any>>('/api/projects', { query: params }),
      getById: (id: string) => 
        $fetch<ApiResponse<any>>(`/api/projects/${id}`),
      getFeatured: (limit = 3) => 
        $fetch<ApiResponse<any>>('/api/projects/featured', { query: { limit } })
    },
    music: {
      getPlaylists: (params?: PaginationParams) => 
        $fetch<ApiResponse<any>>('/api/music', { query: params }),
      getPlaylist: (id: string) => 
        $fetch<ApiResponse<any>>(`/api/music/${id}`),
      getFeatured: (limit = 3) => 
        $fetch<ApiResponse<any>>('/api/music/featured', { query: { limit } })
    },
    search: {
      global: (query: string) => 
        $fetch<ApiResponse<any>>('/api/search', { query: { q: query } })
    }
  }
}
