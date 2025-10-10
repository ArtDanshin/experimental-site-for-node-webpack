import type { StatsSectionProps } from './types'

export const useStatsSection = (props: StatsSectionProps) => {
  const statsItems = computed(() => [
    {
      number: props.stats.projects,
      label: 'Проектов'
    },
    {
      number: props.stats.articles,
      label: 'Статей'
    },
    {
      number: props.stats.streams,
      label: 'Часов стримов'
    },
    {
      number: props.stats.playlists,
      label: 'Плейлистов'
    }
  ])

  return {
    statsItems
  }
}
