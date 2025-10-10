<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
      <div class="project-overlay">
        <NuxtLink :to="`/projects/${project.slug}`" class="project-link">
          <i class="fas fa-external-link-alt"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">
        <NuxtLink :to="`/projects/${project.slug}`">
          {{ project.title }}
        </NuxtLink>
      </h3>
      <p class="project-description">
        {{ project.description }}
      </p>
      <div class="project-tech">
        <Tag 
          v-for="tech in project.technologies" 
          :key="tech"
          :label="tech"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectCard } from './ProjectCard.ts'
import type { ProjectCardProps } from './types'

const props = defineProps<ProjectCardProps>()
const { handleProjectClick } = useProjectCard(props)
</script>

<style scoped>
@import './ProjectCard.css';
</style>
