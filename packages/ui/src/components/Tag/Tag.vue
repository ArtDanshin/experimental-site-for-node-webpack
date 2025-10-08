<script setup lang="ts">
  import { ref } from 'vue';

  const tagClass = ref('tag');
</script>

<script lang="ts">
  export default {
    name: 'TagUI',
  };
</script>

<style scoped lang="scss" src="./Tag.scss"></style>

<template>
  <span :class="tagClass">
    <slot />
  </span>
</template>
