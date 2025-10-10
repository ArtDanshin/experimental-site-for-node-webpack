<template>
  <div class="playlists-grid">
    <PlaylistCard 
      v-for="playlist in playlists" 
      :key="playlist.id"
      :playlist="playlist"
    />
  </div>
</template>

<script setup lang="ts">
import { usePlaylistGrid } from './PlaylistGrid.ts'
import type { PlaylistGridProps } from './types'

const props = defineProps<PlaylistGridProps>()
const { handlePlaylistClick } = usePlaylistGrid(props)
</script>

<style scoped>
@import './PlaylistGrid.css';
</style>
