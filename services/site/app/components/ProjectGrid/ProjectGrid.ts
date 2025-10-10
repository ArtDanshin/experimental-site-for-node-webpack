import type { ProjectGridProps } from './types'

export function useProjectGrid(props: ProjectGridProps) {
  const handleProjectClick = (projectId: string) => {
    // Логика перехода к проекту
    console.log('Navigate to project:', projectId)
  }

  return {
    handleProjectClick
  }
}
