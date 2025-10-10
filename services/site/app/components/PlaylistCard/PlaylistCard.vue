<template>
  <div class="playlist-card">
    <div class="playlist-image">
      <img :src="playlist.image" :alt="playlist.title">
      <div class="playlist-overlay">
        <i class="fas fa-play"></i>
      </div>
    </div>
    <div class="playlist-content">
      <h3 class="playlist-title">
        <NuxtLink :to="`/music/${playlist.slug}`">
          {{ playlist.title }}
        </NuxtLink>
      </h3>
      <p class="playlist-tracks">{{ playlist.tracksCount }} треков</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistCard } from './PlaylistCard.ts'
import type { PlaylistCardProps } from './types'

const props = defineProps<PlaylistCardProps>()
const { handlePlay } = usePlaylistCard(props)
</script>

<style scoped>
@import './PlaylistCard.css';
</style>
