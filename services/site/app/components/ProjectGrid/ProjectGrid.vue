<template>
  <div class="projects-grid">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import { useProjectGrid } from './ProjectGrid.ts'
import type { ProjectGridProps } from './types'

const props = defineProps<ProjectGridProps>()
const { handleProjectClick } = useProjectGrid(props)
</script>

<style scoped>
@import './ProjectGrid.css';
</style>
