<script setup lang="ts">
  import { setupTag } from './Tag';
  import type { TagProps } from './types';

  const props = withDefaults(defineProps<TagProps>(), {
    variant: 'default',
  });

  const { tagClasses } = setupTag(props);
</script>

<script lang="ts">
  export default {
    name: 'TagUI',
  };
</script>

<style scoped lang="scss" src="./Tag.scss"></style>

<template>
  <span :class="tagClasses">
    <slot />
  </span>
</template>
