<template>
  <article class="article-card">
    <div class="article-image">
      <img :src="article.image" :alt="article.title">
      <div class="article-category">{{ article.category }}</div>
    </div>
    <div class="article-content">
      <h3 class="article-title">
        <NuxtLink :to="`/articles/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </h3>
      <p class="article-excerpt">
        {{ article.excerpt }}
      </p>
      <div class="article-meta">
        <span class="article-date">
          <i class="fas fa-calendar"></i>
          {{ formatDate(article.publishedAt) }}
        </span>
        <div class="article-tags">
          <Tag 
            v-for="tag in article.tags" 
            :key="tag"
            :label="tag"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useArticleCard } from './ArticleCard.ts'
import type { ArticleCardProps } from './types'

const props = defineProps<ArticleCardProps>()
const { formatDate } = useArticleCard(props)
</script>

<style scoped>
@import './ArticleCard.css';
</style>
