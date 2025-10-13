<script setup lang="ts">
  import { ArticleCard } from '@artdanshin/ui';

  import { setupArticleGrid } from './ArticleGrid'
  import type { ArticleGridProps } from './types'

  const props = defineProps<ArticleGridProps>()
  const { displayedArticles } = setupArticleGrid(props)
</script>

<style scoped lang="scss" src="./ArticleGrid.scss" />

<template>
  <div class="articles-grid">
    <ArticleCard
      v-for="article in displayedArticles" 
      :key="article.id"
      :title="article.title"
      :description="article.description"
      :image="article.image"
      :category="article.category"
      :tags="article.tags"
      :href="article.slug"
      :date="article.publishedAt";
    />
  </div>
</template>
