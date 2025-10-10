<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number">{{ stats.projects }}+</h3>
            <p class="stat-label">Проектов</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fas fa-blog"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number">{{ stats.articles }}+</h3>
            <p class="stat-label">Статей</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fas fa-gamepad"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number">{{ stats.streams }}+</h3>
            <p class="stat-label">Часов стримов</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fas fa-music"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number">{{ stats.playlists }}+</h3>
            <p class="stat-label">Плейлистов</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStatsSection } from './StatsSection.ts'
import type { StatsSectionProps } from './types'

const props = defineProps<StatsSectionProps>()
const { statsItems } = useStatsSection(props)
</script>

<style scoped>
@import './StatsSection.css';
</style>
