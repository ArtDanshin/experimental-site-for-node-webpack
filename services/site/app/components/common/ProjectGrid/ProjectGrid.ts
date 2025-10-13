import type { ProjectGridProps } from './types'

export function setupProjectGrid(props: ProjectGridProps) {
  const handleProjectClick = () => {
    // Логика перехода к проекту
    console.log('Navigate to project:')
  }

  return {
    handleProjectClick
  }
}
