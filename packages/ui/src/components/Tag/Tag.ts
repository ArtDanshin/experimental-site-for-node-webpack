import { computed } from 'vue';

import type { TagProps } from './types';

export function setupTag(
  props: TagProps,
) {
  const tagClasses = computed(() => [
    'tag',
    `_${props.variant}`,
  ]);

  return {
    tagClasses,
  };
}
