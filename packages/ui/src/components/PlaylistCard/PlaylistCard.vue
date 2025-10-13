<script setup lang="ts">
  import type { PlaylistCardProps } from './types';

  defineProps<PlaylistCardProps>();
</script>

<style scoped lang="scss" src="./PlaylistCard.scss"></style>

<template>
  <div class="playlist-card">
    <div class="playlist-card__image">
      <img
        :src="image"
        :alt="title"
      >
      <div class="playlist-card__overlay">
        <i class="fas fa-play" />
      </div>
    </div>
    <div class="playlist-card__content">
      <a
        class="playlist-card__title"
        :href="href"
      >
        {{ title }}
      </a>
      <p class="playlist-card__tracks">
        {{ tracksCount }} треков
      </p>
    </div>
  </div>
</template>
