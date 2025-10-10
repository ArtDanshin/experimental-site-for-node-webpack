import type { TagProps } from './types'

export const useTag = (props: TagProps) => {
  const tagClasses = computed(() => [
    'tag',
    `tag--${props.variant || 'primary'}`,
    `tag--${props.size || 'md'}`
  ])

  return {
    tagClasses
  }
}
