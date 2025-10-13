<script setup lang="ts">
  import { PlaylistCard } from '@artdanshin/ui';

  import { setupPlaylistGrid } from './PlaylistGrid'
  import type { PlaylistGridProps } from './types'

  const props = defineProps<PlaylistGridProps>()
  const { handlePlaylistClick } = setupPlaylistGrid(props)
</script>

<style scoped lang="scss" src="./PlaylistGrid.scss" />

<template>
  <div class="playlists-grid">
    <PlaylistCard 
      v-for="playlist in playlists" 
      :key="playlist.id"
      :title="playlist.title"
      :description="playlist.description"
      :image="playlist.image"
      :tracks-count="playlist.tracksCount"
      href="#"
      @click="handlePlaylistClick"
    />
  </div>
</template>
