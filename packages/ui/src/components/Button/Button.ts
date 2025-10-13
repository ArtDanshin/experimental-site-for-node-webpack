import { computed } from 'vue';

import type { ButtonProps, ButtonEmits } from './types';

export function setupButton(
  props: ButtonProps,
  emit: ButtonEmits,
) {
  // Computed classes for button
  const buttonClasses = computed(() => [
    'btn',
    `_${props.variant}`,
    `_${props.size}`,
    {
      _disabled: props.disabled,
      '_full-width': props.fullWidth,
    },
  ]);

  // Handle click event
  const handleClick = (event: MouseEvent) => {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    emit('click', event);
  };

  return {
    buttonClasses,
    handleClick,
  };
}
