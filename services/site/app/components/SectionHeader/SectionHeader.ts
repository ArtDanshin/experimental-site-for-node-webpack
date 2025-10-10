import type { SectionHeaderProps } from './types'

export const useSectionHeader = (props: SectionHeaderProps) => {
  const defaultViewAllText = 'Смотреть все'
  
  const viewAllText = computed(() => props.viewAllText || defaultViewAllText)

  return {
    viewAllText
  }
}
