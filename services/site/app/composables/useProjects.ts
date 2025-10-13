import type { Project, ProjectFilters, ProjectSearchResult } from '~/types/project'

export const useProjects = () => {
  const { projects } = useApi()
  
  const getProjects = async (filters?: ProjectFilters) => {
    try {
      const response = await projects.getAll(filters)
      return response.data as ProjectSearchResult
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw error
    }
  }
  
  const getProject = async (id: string) => {
    try {
      const response = await projects.getById(id)
      return response.data as Project
    } catch (error) {
      console.error('Error fetching project:', error)
      throw error
    }
  }
  
  const getFeaturedProjects = async (limit = 3) => {
    try {
      const response = await projects.getFeatured(limit)
      return response.data as Project[]
    } catch (error) {
      console.error('Error fetching featured projects:', error)
      throw error
    }
  }
  
  return {
    getProjects,
    getProject,
    getFeaturedProjects
  }
}
