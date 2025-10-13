<script setup lang="ts">
  import type { HeroAvatarProps } from './types';

  defineProps<HeroAvatarProps>();
</script>

<style scoped lang="scss" src="./HeroAvatar.scss"></style>

<template>
  <div class="hero-avatar">
    <img
      :src="imageUrl"
      :alt="title"
      class="hero-avatar__image"
    >
  </div>
</template>
