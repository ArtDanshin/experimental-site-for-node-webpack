import { computed } from 'vue';

import type { ButtonProps, ButtonEmits } from './types';

export function setupButton(
  props: ButtonProps,
  emit: ButtonEmits,
) {
  // Computed classes for button
  const buttonClasses = computed(() => [
    'btn',
    `btn__${props.variant}`,
    `btn__${props.size}`,
    {
      'btn__disabled': props.disabled,
      'btn__full-width': props.fullWidth,
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
