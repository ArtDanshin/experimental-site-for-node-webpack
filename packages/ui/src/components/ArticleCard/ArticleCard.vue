<script setup lang="ts">
  import { Tag } from '../Tag';

  import { setupArticleCard } from './ArticleCard';
  import type { ArticleCardProps, ArticleCardEmits } from './types';

  const props = defineProps<ArticleCardProps>();
  const emit = defineEmits<ArticleCardEmits>();

  const { formatedDate, handleClick } = setupArticleCard(props, emit);
</script>

<style scoped lang="scss" src="./ArticleCard.scss"></style>

<template>
  <article
    class="card"
    @click="handleClick"
  >
    <div class="card__image">
      <img
        :src="image"
        :alt="title"
        loading="lazy"
      >
      <div class="card__category">
        {{ category }}
      </div>
    </div>

    <div class="card__content">
      <h3 class="card__title">
        <a
          :href="href"
          @click.stop
        >{{ title }}</a>
      </h3>

      <p class="card__description">
        {{ description }}
      </p>

      <div class="card__meta">
        <span class="card__date">
          <i class="fas fa-calendar" />
          {{ formatedDate }}
        </span>

        <span
          v-if="readingTime"
          class="card__reading-time"
        >
          <i class="fas fa-clock" />
          {{ `${readingTime } мин` }}
        </span>

        <div
          v-if="tags && tags.length > 0"
          class="card__tags"
        >
          <Tag
            v-for="tag in tags"
            :key="tag"
            size="sm"
          >
            {{ tag }}
          </Tag>
        </div>
      </div>
    </div>
  </article>
</template>
