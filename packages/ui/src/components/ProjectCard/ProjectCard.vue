<script setup lang="ts">
  import { Tag } from '../Tag';

  import type { ProjectCardProps, ProjectCardEmits } from './types';

  defineProps<ProjectCardProps>();
  const emit = defineEmits<ProjectCardEmits>();

  const handleClick = () => {
    emit('click');
  };
</script>

<style scoped lang="scss" src="./ProjectCard.scss"></style>

<template>
  <div
    class="project-card"
    @click="handleClick"
  >
    <div class="project-card__image">
      <img
        :src="image"
        :alt="title"
      >
      <div class="project-card__overlay">
        <a
          class="project-card__link"
          :href="href"
          @click.stop
        >
          <i class="fas fa-external-link-alt" />
        </a>
      </div>
    </div>
    <div class="project-card__content">
      <a
        class="project-card__title"
        :href="href"
        @click.stop
      >
        {{ title }}
      </a>
      <p class="project-card__description">
        {{ description }}
      </p>
      <div class="project-card__tech">
        <Tag
          v-for="tag in tags"
          :key="tag"
          variant="tech"
        >
          {{ tag }}
        </Tag>
      </div>
    </div>
  </div>
</template>
