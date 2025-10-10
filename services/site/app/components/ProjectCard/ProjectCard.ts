import type { ProjectCardProps } from './types'

export function useProjectCard(props: ProjectCardProps) {
  const handleProjectClick = () => {
    // Логика перехода к проекту
    console.log('Navigate to project:', props.project.title)
  }

  return {
    handleProjectClick
  }
}
