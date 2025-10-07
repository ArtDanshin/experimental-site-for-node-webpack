<script setup lang="ts">
  import { setupButton } from './Button'
  import type { ButtonProps, ButtonEmits } from './types'

  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    fullWidth: false,
  })

  const emit = defineEmits<ButtonEmits>()

  const { buttonClasses, handleClick } = setupButton(props, emit)
</script>

<style scoped lang="css" src="./Button.css"></style>

<template>
  <button
    :class='buttonClasses'
    :type='type'
    :disabled='disabled'
    @click='handleClick'
  > 
    <slot />
  </button>
</template>
