import type { ListSectionProps } from './types'

export const setupListSection = (props: ListSectionProps) => {
  const sectionClasses = computed(() => [
    'list-section',
    `_${props.variant}`,
  ]);

  return {
    sectionClasses
  }
}
