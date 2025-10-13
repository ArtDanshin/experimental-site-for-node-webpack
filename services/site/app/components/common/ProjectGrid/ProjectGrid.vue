<script setup lang="ts">
  import { ProjectCard } from '@artdanshin/ui';

  import { setupProjectGrid } from './ProjectGrid';
  import type { ProjectGridProps } from './types';

  const props = defineProps<ProjectGridProps>();
  const { handleProjectClick } = setupProjectGrid(props);
</script>

<style scoped lang="scss" src="./ProjectGrid.scss" />

<template>
  <div class="projects-grid">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :tags="project.technologies"
      href="#"
      @click="handleProjectClick"
    />
  </div>
</template>
